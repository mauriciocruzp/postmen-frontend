import { axiosAPIInstance } from "../axios";

export async function getOrder(trackingId) {
  try {
    const response = await axiosAPIInstance.get(`/order/${trackingId}`);
    return response;
  } catch (error) {
    return error.response;
  }
}