function Frame() {
  return (
    <div className="h-[45.807px] relative rounded-[8.859px] shrink-0 w-full">
      <div aria-hidden className="absolute bg-[#ffd064] inset-0 pointer-events-none rounded-[8.859px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[12px] pl-[11px] pr-[12px] pt-[14px] relative size-full">
          <p className="[word-break:break-word] font-['Jua:Regular',sans-serif] leading-[1.14] not-italic relative shrink-0 text-[#081974] text-[22.471px] whitespace-nowrap">#01</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_6.05px_0px_0px_0px_#e8b149]" />
    </div>
  );
}

function Group() {
  return (
    <div className="flex-[1_0_0] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] min-h-px place-items-start relative">
      <div className="bg-[#524798] col-1 h-[78.192px] ml-0 mt-0 relative rounded-bl-[1px] rounded-br-[1px] row-1 w-[10.155px]" />
      <div className="bg-[#5e54ac] col-1 h-[69.886px] ml-[4.54px] mt-[8.31px] relative rounded-bl-[3px] rounded-br-[2px] row-1 w-[5.618px]" />
    </div>
  );
}

export default function StepOneIcon() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Step One Icon">
      <Frame />
      <Group />
    </div>
  );
}