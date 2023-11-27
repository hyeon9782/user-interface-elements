import { ChangeEvent, FormEvent, useState } from "react";
import FormControl from "./FormControl";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    if (!formData.username || !formData.email || !formData.password) {
      alert("모든 필드를 입력해주세요.");
      return false;
    }
    return true;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("회원가입 성공");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      {/* <label htmlFor="username">User name</label>
      <input
        type="text"
        id="username"
        placeholder="유저네임을 입력해주세요."
        value={formData.username}
        onChange={handleInputChange}
      />
      <div></div> */}
      <FormControl
        id="username"
        placeholder="유저네임을 입력해주세요."
        value={formData.username}
        onChange={handleInputChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        placeholder="이메일을 입력해주세요."
        value={formData.email}
        onChange={handleInputChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        placeholder="비밀번호를 입력해주세요."
        value={formData.password}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SignUpForm;

// 1. 유효성 체크
// 2. 유효성에 체크되지
