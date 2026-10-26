import Heading from "./Heading";
import { CheckListItem } from "./CheckList";
import ScreenGate from "./ScreenGate";

export default function Support() {
   return (
      <section id="support" className="relative py-14 sm:py-20 scroll-mt-20">
       <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-8">
           {/* Left: Content */}
           <div className="lg:col-span-7 space-y-4">
              <Heading
                badge="Always Here for You"
                title="Dedicated Support Around"
                highlightText="The Clock When You Need"
                description="Our support team is always available to ensure the scheduling system runs smoothly, so no appointments are missed."
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {["Instant response from our support team","Live specialist guidance available", "Priority support for urgent scheduling issues", "Multiple contact channels— Chat, email and phone"].map((item) => (
                    <CheckListItem key={item} text={item} wrapperClassName = "relative" />
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 grid">
                <div className="group rounded-lg p-4 bg-gradient-to-br from-transparent via-indigo-200/20 to-transparent shadow-md hover:drop-shadow-xl transition-all">
                  <div className="flex items-center gap-3">
                      <div className="w-10 h-10" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM10.38 13.01C10.79 13.01 11.13 13.35 11.13 13.76C11.13 14.17 10.79 14.51 10.38 14.51H7.7C7.26 14.51 6.85 14.3 6.59 13.94C6.34 13.6 6.28 13.18 6.4 12.78C6.75 11.71 7.61 11.13 8.37 10.61C9.17 10.07 9.62 9.73 9.62 9.15C9.62 8.63 9.2 8.21 8.68 8.21C8.16 8.21 7.75 8.64 7.75 9.16C7.75 9.57 7.41 9.91 7 9.91C6.59 9.91 6.25 9.57 6.25 9.16C6.25 7.82 7.34 6.72 8.69 6.72C10.04 6.72 11.13 7.81 11.13 9.16C11.13 10.57 10.07 11.29 9.22 11.87C8.69 12.23 8.19 12.57 7.94 13.02H10.38V13.01ZM17 13.08H16.79V13.77C16.79 14.18 16.45 14.52 16.04 14.52C15.63 14.52 15.29 14.18 15.29 13.77V13.08H13.33C13.33 13.08 13.33 13.08 13.32 13.08C12.83 13.08 12.38 12.82 12.13 12.4C11.88 11.97 11.88 11.44 12.13 11.02C12.81 9.85 13.6 8.52 14.32 7.36C14.64 6.85 15.25 6.62 15.82 6.78C16.39 6.95 16.79 7.47 16.78 8.07V11.59H17C17.41 11.59 17.75 11.93 17.75 12.34C17.75 12.75 17.41 13.08 17 13.08Z" fill="#292D32"></path> <path d="M15.2891 11.5806V8.64062C14.6991 9.60062 14.0891 10.6306 13.5391 11.5706H15.2891V11.5806Z" fill="#292D32"></path></g></svg>
                      </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-900">Chat with support</div>
                      <div className="text-sm text-neutral-600">Average response under 2 minutes</div>
                    </div>
                  </div>
                </div>
                <div className="group rounded-lg p-4 bg-gradient-to-br from-transparent via-indigo-200/20 to-transparent shadow-md hover:drop-shadow-xl transition-all">
                  <div className="flex items-center gap-3">
                      <div className="w-10 h-10" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#0F0F0F"></path> <path d="M13.5 18C13.5 18.8284 12.8284 19.5 12 19.5C11.1716 19.5 10.5 18.8284 10.5 18C10.5 17.1716 11.1716 16.5 12 16.5C12.8284 16.5 13.5 17.1716 13.5 18Z" fill="#0F0F0F"></path> <path d="M11 12V14C11 14 11 15 12 15C13 15 13 14 13 14V12C13 12 13.4792 11.8629 13.6629 11.7883C13.6629 11.7883 13.9969 11.6691 14.2307 11.4896C14.4646 11.3102 14.6761 11.097 14.8654 10.8503C15.0658 10.6035 15.2217 10.3175 15.333 9.99221C15.4443 9.66693 15.5 9.4038 15.5 9C15.5 8.32701 15.3497 7.63675 15.0491 7.132C14.7596 6.61604 14.3476 6.21786 13.8132 5.93745C13.2788 5.64582 12.6553 5.5 11.9427 5.5C11.4974 5.5 11.1021 5.55608 10.757 5.66825C10.4118 5.7692 10.1057 5.9094 9.83844 6.08887C9.58236 6.25712 9.36525 6.4478 9.18711 6.66091C9.02011 6.86281 8.8865 7.0591 8.78629 7.24978C8.68609 7.44046 8.61929 7.6087 8.58589 7.75452C8.51908 7.96763 8.49125 8.14149 8.50238 8.27609C8.52465 8.41069 8.59145 8.52285 8.70279 8.61258C8.81413 8.70231 8.9867 8.79765 9.22051 8.8986C9.46546 8.97712 9.65473 9.00516 9.78834 8.98273C9.93308 8.96029 10.05 8.89299 10.1391 8.78083C10.1391 8.78083 10.6138 8.10569 10.7474 7.97109C10.8922 7.82528 11.0703 7.71312 11.2819 7.6346C11.4934 7.54487 11.7328 7.5 12 7.5C12.579 7.5 13.0076 7.64021 13.286 7.92062C13.5754 8.18982 13.6629 8.41629 13.6629 8.93225C13.6629 9.27996 13.6017 9.56038 13.4792 9.77349C13.3567 9.9866 13.1953 10.1605 12.9949 10.2951C12.9949 10.2951 12.7227 10.3991 12.5 10.5C12.2885 10.5897 11.9001 10.7381 11.6997 10.8503C11.5104 10.9512 11.4043 11.0573 11.2819 11.2144C11.1594 11.3714 11 11.7308 11 12Z" fill="#0F0F0F"></path> </g></svg>
                      </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-900">Browse help center</div>
                      <div className="text-sm text-neutral-600">Guides, tutorials, and API docs</div>
                    </div>
                  </div>
                </div>
              </div>
           </div>

           {/* Right: Chat mock & status */}
           <div className="lg:col-span-5">
            <ScreenGate minWidth={768}>
             <div className="relative overflow-hidden rounded-xl bg-white/20 drop-shadow-xl">
               <div className="p-4 bg-white drop-shadow-xl space-y-4">
                 <div className="flex flex-wrap items-start justify-between border-b border-neutral-100 pb-4">
                   <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                     <span className="text-sm font-medium text-neutral-900">All systems operational</span>
                   </div>
                   <span className="text-xs text-neutral-600">Updated just now</span>
                 </div>
                 <div className="relative">
                    <div className="text-sm font-semibold text-neutral-900">Support Chat</div>
                    <div className="mt-3 space-y-3">
                      <div className="max-w-[80%] rounded-lg bg-neutral-100 p-3 text-sm text-neutral-800">Hi! I can help you set up appointment reminders. Which channel do you want first?</div>
                      <div className="ml-auto max-w-[80%] rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-500 text-white p-3 text-sm">WhatsApp — send it 24 hours before the appointment.</div>
                      <div className="max-w-[80%] rounded-lg bg-neutral-100 p-3 text-sm text-neutral-800">Go to Workflow integrations → Notification → Toggle WhatsApp for Admin/User, set to Instant.</div>
                      <div className="ml-auto max-w-[80%] rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-500 text-white p-3 text-sm">Can I add a second reminder for email too?</div>
                      <div className="max-w-[80%] rounded-lg bg-neutral-100 p-3 text-sm text-neutral-800">Yes. Add another reminder, Select Email, set it to 24 hours before. Both will run automatically for every booking.</div>
                    </div>
                 </div>
               </div>
             </div>
             </ScreenGate>
           </div>

         </div>
       </div>
     </section>
   );
};