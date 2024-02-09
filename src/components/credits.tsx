const Credits = () => {
  return (
    <div className="mt-4 flex flex-col justify-center items-center text-white">
      <span className="text-xs text-slate-300">@gubriyeeel</span>
      <div className="flex gap-4 text-center text-sm">
        <a
          href="https://github.com/gubriyeeel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Github
        </a>
        <i>·</i>
        <a
          href="https://www.facebook.com/gubriyeeel/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Facebook
        </a>
      </div>
    </div>
  );
};

export default Credits;
