


export default function ContactUs() {


  return (
    <div className="isolate bg-blue-500 px-6  lg:px-8 md:flex md:items-center  py-8">

     
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-12">با ما در ارتباط باشید و انتقادات و پیشنهادات خود را با ما در میان بگذارید.</h2>
        <p>موضوع یا مطلب خاصی مد نظر شما است که در قالب مقاله در سفرلند منتشر شود؟

در هنگام مرور صفحات سفرلند متوجه مشکل خاصی شده‌اید؟

پیشنهاد یا انتقادی نسبت به یکی از اعضاء تحریریه‌ی سفرلند دارید؟</p>
      
      </div>
      <form action="#" method="POST" className="mx-auto mt-4 max-w-xl sm:mt-4 ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        
        <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="Email" className="block text-sm/6 font-semibold text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="Email"
                name="Email"
                type="text"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
     
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={2}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                defaultValue={''}
              />
            </div>
          </div>
       
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
           ارسال پیام
          </button>
        </div>
      </form>
    </div>
  )
}
