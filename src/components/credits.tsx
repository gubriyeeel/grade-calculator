const Credits = () => {
  return (
    <div className="mt-4 flex flex-col text-center">
      <span className="text-xs text-foreground">@gubriyeeel</span>
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
