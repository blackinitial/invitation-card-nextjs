export const LoadingSpinner = (props: { size?: number }) => {
  return (
    <div role="status">
      <div className="border-l-2 border-[#1a5cff] rounded-full animate-spin" 
        style={{
          width: props.size ?? 30,
          height: props.size ?? 30 
        }} />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LoadingSpinner size={60} />
    </div>
  )
}

export const LoadingLove = () => {
  return (
    <div id="love-loading" className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-pink-100 via-rose-400 to-rose-600">
      <div className="love1"></div>
      <div className="love2"></div>
      <div className="love3"></div>
      <div className="love4"></div>
    </div>
  )
}