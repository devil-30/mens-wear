import axios from "axios";
const ApiCall = async (url: string, method: string, data?: {}) => {
  let headerData = {};
  //   const session = await getSession();
  //   if (session) {
  //     headerData = {
  //       Authorization: `Bearer ${session.user.token}`,
  //     };
  //   }
  try {
    const result = await axios(`${url}`, {
      method,
      headers: headerData,
      data,
    });
    const response = await result.data;
    return response;
  } catch (error: any) {}
};
export default ApiCall;
