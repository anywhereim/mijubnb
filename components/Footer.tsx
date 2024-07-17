export default function Footer() {
  return (
    <footer className="bg-gray-50 py-2">
      <div className="max-w-screen-xl w-full mx-auto p-4 md:flex md:items-center md:justify-between border-b-gray-200 border-b">
        <div className="text-sm text-gray-800 sm:text-center">
          © 2024 <span className="hover:underline"> Mijubnb. </span>
          All Rights Reserved
        </div>
        <ul className="flex flex-wrap items-center md:gap-6 text-sm text-gray-800 mt-2 sm:mt-0">
          <a href="#" className="hover:underline">
            개인정보 처리방침
          </a>
          <a href="#" className="hover:underline">
            이용약관
          </a>
          <a href="#" className="hover:underline">
            공지사항
          </a>
          <a href="#" className="hover:underline">
            회사 세부정보
          </a>
        </ul>
      </div>
      <div className="text-[10px] text-gray-400 mx-auto p-4 max-w-screen-xl">
        웹사이트 제공자: MijuBnb | 사업자등록번호: 없음 | 연락처:
        test.mijubnb.com | 웹사이트 | 호스팅 서비스 제공업체: vercel | mijuBnb는
        통신판매 중개자로 nextbnb 플랫폼을 통하여 게스트와 호스트 사이에
        이루어지는 통신판매의 당사자가 아닙니다. mijubnb플랫폼을 통하여 예약된
        캠핑장에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.
      </div>
    </footer>
  );
}
