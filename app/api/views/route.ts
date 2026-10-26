import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const VIEWS_FILE = path.join(process.cwd(), "data", "blog-views.json");

type ViewsMap = Record<string, number>;

async function readViews(): Promise<ViewsMap> {
  try {
    const raw = await fs.readFile(VIEWS_FILE, "utf-8");
    const data = JSON.parse(raw);
    return data && typeof data === "object" ? (data as ViewsMap) : {};
  } catch {
    return {};
  }
}

async function writeViews(views: ViewsMap): Promise<void> {
  await fs.mkdir(path.dirname(VIEWS_FILE), { recursive: true });
  await fs.writeFile(VIEWS_FILE, JSON.stringify(views, null, 2), "utf-8");
}

export async function GET(req: Request) {
  const slug = new URL(req.url).searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const views = await readViews();
  return NextResponse.json({ slug, views: views[slug] ?? 0 });
}

export async function POST(req: Request) {
  try {
    const { slug } = await req.json();

    if (!slug || typeof slug !== "string") {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }

    const views = await readViews();
    views[slug] = (views[slug] ?? 0) + 1;
    await writeViews(views);

    return NextResponse.json({ slug, views: views[slug] });
  } catch (error) {
    console.error("Views API error:", error);
    return NextResponse.json({ error: "Failed to update views" }, { status: 500 });
  }
}
