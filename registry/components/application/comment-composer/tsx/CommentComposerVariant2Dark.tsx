export function CommentComposerVariant2Dark() {
  return (
    <div className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900 py-1.5 pr-1.5 pl-4 focus-within:border-indigo-400 focus-within:ring-1 focus-within:ring-indigo-400">
      <label htmlFor="replyBody" className="sr-only">
        Write a reply
      </label>
      <input
        id="replyBody"
        type="text"
        placeholder="Reply to Marcus&hellip;"
        className="flex-1 border-0 bg-transparent p-0 text-sm text-gray-100 placeholder:text-gray-500 focus:ring-0 focus:outline-none"
      />

      <button type="button" aria-label="Add an emoji" className="shrink-0 rounded-full p-1.5 text-gray-400 hover:bg-gray-800 hover:text-gray-200">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
      </button>

      <button type="submit" aria-label="Send reply" className="flex shrink-0 items-center justify-center rounded-full bg-indigo-500 p-2 text-white hover:bg-indigo-400">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      </button>
    </div>
  )
}
