const Helmet = ({ title, children }) => {
  document.title = "Supamart -" + title;
  return <div className="w-full">{children}</div>;
};

export default Helmet;
