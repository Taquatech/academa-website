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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-full items-center relative shrink-0 w-[66px]">
      <Frame />
      <Group />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[11px] items-start leading-[1.14] min-w-px not-italic relative">
      <p className="font-['Gully:SemiBold',sans-serif] relative shrink-0 text-[#000846] text-[20px] w-full">Register</p>
      <p className="font-['Gully:Regular',sans-serif] relative shrink-0 text-[16px] text-[rgba(0,8,70,0.91)] w-full">Create your admin account to get your school on Academa.</p>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="bg-white content-stretch flex gap-[15px] items-start overflow-clip pl-[24px] pr-[41px] pt-[34px] relative rounded-[12px] size-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}