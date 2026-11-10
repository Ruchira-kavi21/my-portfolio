
function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
      <span className="h-px w-8 bg-violet-400" />
      {children}
    </div>
  );
}

export default SectionLabel;
