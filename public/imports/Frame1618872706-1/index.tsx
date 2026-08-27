function Frame() {
  return (
    <div className="bg-[rgba(0,82,158,0.16)] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Gully:Regular',sans-serif] leading-[1.14] not-italic relative shrink-0 text-[#081974] text-[14px] whitespace-nowrap">What Schools Are Saying</p>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative size-full">
      <Frame />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Gully:SemiBold',sans-serif] leading-[1.24] min-w-full not-italic relative shrink-0 text-[44px] text-black tracking-[0.44px] w-[min-content]">Real schools. Real results.</p>
    </div>
  );
}