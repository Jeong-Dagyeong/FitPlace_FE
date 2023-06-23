import React from 'react';

export default function SignUp() {
  return (
    <div className="font-noto text-white bg-gray-950 w-full md:w-auto h-screen">
      <h1>회원가입</h1>
      <div>
        <img
          src="../images/logo.png"
          alt="fitplace 로고"
          className="h-3.5 w-30"
        />
        <span>의 회원인가요?</span>
        <a href="/login">로그인</a>
      </div>
      <form>
        <div>
          <p>이메일</p>
          <div>
            <input type="text" />
            <button>이메일 확인</button>
          </div>
        </div>
        <div>
          <p>비밀번호</p>
          <div>
            <input
              type="password"
              placeholder="대/소문자, 특수문자, 숫자포함 8자 이상 16자 이하"
            />
          </div>
        </div>
        <div>
          <p>비밀번호 확인</p>
          <div>
            <input
              type="password"
              placeholder="대/소문자, 특수문자, 숫자포함 8자 이상 16자 이하"
            />
            <button>비밀번호 확인</button>
          </div>
        </div>
        <div>
          <p>이름</p>
          <input type="text" />
        </div>
        <div>
          <p>전화번호</p>
          <input type="number" placeholder="- 를 제외하고 입력해주세요." />
        </div>
        <div>
          <label>개인정보 수집 및 이용</label>
          <input type="radio"></input>
          <label>전자 금융 서비스 이용 약관</label>
          <input type="radio"></input>
        </div>
        <div>
          <label>만 14세 이상입니다.</label>
          <input type="radio"></input>
        </div>
        <button>회원가입</button>
      </form>
    </div>
  );
}
