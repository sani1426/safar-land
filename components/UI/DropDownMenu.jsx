// 'use client';
import { callsToAction, solutions } from '@/constance';
// import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
// import {
//   ArrowPathIcon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
// } from '@heroicons/react/24/outline'
// import { useState } from 'react';

// export default function DropDownMenu() {
//   const [btn, setBtn] = useState(false);
//   return (
//     <div className='relative flex flex-col items-center justify-center'>
//       <button onClick={() => setBtn(!btn)}>click</button>

//       <div
//         transition
//         className={`absolute top-1 z-10 mt-5 flex w-screen ${btn ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-1 opacity-0'} max-w-max px-4 transition duration-200 ease-out`}
//       >
//         <div className='w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5'>
//           <div className='p-4'>
//             {solutions.map((item) => (
//               <div
//                 key={item.name}
//                 className='group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50'
//               >
//                 <div className='mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
//                   <item.icon
//                     aria-hidden='true'
//                     className='size-6 text-gray-600 group-hover:text-indigo-600'
//                   />
//                 </div>
//                 <div>
//                   <a href={item.href} className='font-semibold text-gray-900'>
//                     {item.name}
//                     <span className='absolute inset-0' />
//                   </a>
//                   <p className='mt-1 text-gray-600'>{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
//             {callsToAction.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className='flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100'
//               >
//                 <item.icon
//                   aria-hidden='true'
//                   className='size-5 flex-none text-gray-400'
//                 />
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
