import React from 'react';

export default function SignUp() {
  return (
    <div className="font-noto text-white bg-gray-950 h-screen flex justify-center">
      <div className="w-4/5 flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <div className="mb-10 w-96">
            <div className=" text-left">
              <p className="text-xl font-semibold mb-12">회원가입</p>
            </div>
            <img
              src="../images/logo.png"
              alt="fitplace 로고"
              className="h-3.5 w-30 inline -mt-0.5"
            />
            <span className="ml-1.5 mt-2">의 회원인가요?</span>
            <a href="/login" className="text-gray-400 font-semibold ml-5">
              로그인
            </a>
          </div>
          <form>
            <div className="mt-6">
              <span className="font-semibold text-lg">이메일</span>
              <div>
                <label className="relative">
                  <input
                    type="text"
                    className="bg-slate-950 focus:-none w-96 h-8 outline-none border-b mr-4"
                  />
                  <button className="text-sm outline p-1 rounded-sm w-20 h-5 absolute -ml-24 p-[0.2rem]">
                    이메일 확인
                  </button>
                </label>
              </div>
            </div>
            <div className="mt-6">
              <span className="font-semibold text-lg">비밀번호</span>
              <div>
                <input
                  type="password"
                  placeholder="대/소문자, 특수문자, 숫자포함 8자 이상 16자 이하"
                  className="bg-slate-950 placeholder:text-gray-600 focus:-none w-96 h-8 outline-none border-b mr-4"
                />
              </div>
            </div>
            <div className="mt-6">
              <span className="font-semibold">비밀번호 확인</span>
              <div>
                <label className="relative">
                  <input
                    type="password"
                    placeholder="대/소문자, 특수문자, 숫자포함 8자 이상 16자 이하"
                    className="bg-slate-950 placeholder:text-gray-600 focus:-none w-96 h-8 outline-none border-b mr-4"
                  />
                  <button className="text-sm outline p-1 rounded-sm w-20 h-5 absolute -ml-24 p-[0.2rem]">
                    비밀번호 확인
                  </button>
                </label>
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <span className="font-semibold text-lg">이름</span>
              <input
                type="text"
                className="bg-slate-950 focus:-none w-96 h-8 outline-none border-b mr-4"
              />
            </div>
            <div className="flex flex-col mt-6">
              <span className="font-semibold text-lg">전화번호</span>
              <input
                type="text"
                placeholder="- 를 제외하고 입력해주세요."
                className="bg-slate-950 placeholder:text-gray-600 focus:-none w-96 h-8 outline-none border-b mr-4"
              />
            </div>
            <div className="mt-6">
              <label className="mr-3 text-s">개인정보 수집 및 이용</label>
              <input type="radio" className="mr-4"></input>
              <label className="mr-3 text-s">전자 금융 서비스 이용 약관</label>
              <input type="radio" className="mr-4"></input>
            </div>
            <div className="mt-3">
              <label className="mr-3 text-s">만 14세 이상입니다.</label>
              <input type="radio"></input>
            </div>
            <button className="outline mt-6 rounded-sm w-64 h-14 tracking-wide pl-4">
              회원가입
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
