type SectionLabelProps = {
  index: string;
  label: string;
  dark?: boolean;
};

export default function SectionLabel({ index, label, dark = false }: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-3 whitespace-nowrap text-[0.72rem] font-semibold uppercase ${dark ? 'text-white/48' : 'text-slate-500'}`}>
      <span className="text-cyanline">{index}</span>
      <span>{label}</span>
    </div>
  );
}
