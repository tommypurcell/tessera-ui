export function CommentComposerVariant1() {
  return (
    <div className="flex gap-3">
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces"
        alt="Ava Wilson"
        className="size-9 shrink-0 rounded-full object-cover"
      />

      <div className="flex flex-1 flex-col gap-2 rounded-lg border border-gray-300 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
        <label htmlFor="commentBody" className="sr-only">
          Write a comment
        </label>
        <textarea
          id="commentBody"
          rows={3}
          placeholder="Write a comment&hellip; use @ to mention someone"
          className="w-full resize-none rounded-t-lg border-0 p-3 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none"
        />

        <div className="flex items-center justify-between border-t border-gray-200 px-3 py-2">
          <div className="flex items-center gap-1">
            <button type="button" aria-label="Mention someone" className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-3.5 7.13" />
              </svg>
            </button>
            <button type="button" aria-label="Attach a file" className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01"
                />
              </svg>
            </button>
            <button type="button" aria-label="Add an emoji" className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
            </button>
          </div>

          <button type="submit" className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-medium text-white hover:bg-indigo-700">
            Comment
          </button>
        </div>
      </div>
    </div>
  )
}
