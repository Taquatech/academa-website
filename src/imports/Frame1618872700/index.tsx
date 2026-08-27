function Frame() {
  return (
    <div className="bg-[rgba(0,82,158,0.16)] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Gully:Regular',sans-serif] leading-[1.14] not-italic relative shrink-0 text-[#081974] text-[14px] whitespace-nowrap">Built For Everyone In Your School</p>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative size-full">
      <Frame />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Gully:SemiBold',sans-serif] h-[42px] leading-[0] min-w-full not-italic relative shrink-0 text-[#000419] text-[0px] text-center w-[min-content]">
        <span className="leading-[0.98] text-[42px]">{`One platform. `}</span>
        <span className="leading-[0.98] text-[42px]">Every role.</span>
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Gully:Regular',sans-serif] h-[34px] leading-[1.44] not-italic relative shrink-0 text-[#3a3a3a] text-[16px] text-center w-[492px]">{`Academa works for every stakeholder in your school — from the principal's office to the student's phone.`}</p>
    </div>
  );
}