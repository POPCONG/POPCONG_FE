import { create } from "zustand";

const useSignupStore = create((set) => ({
  step: 1, // 현재 회원가입 단계
  userType: null, // 'host' 또는 'guest'

  // 다음 단계로 이동하는 액션
  setNextStep: (type) => set({ step: 2, userType: type }),

  // 이전 단계로 돌아가는 액션
  setBackStep: () => set({ step: 1 }),
}));

export default useSignupStore;
