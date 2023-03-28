import { axiosAPIBridgeInstance } from "../axios";

export async function startDelivery(trackingId) {
  try {
    const response = await axiosAPIBridgeInstance.post("/event/order/start-delivery", {
      type: "START_DELIVERY",
      trackingId,
    }, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
      }
    });
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function endDelivery(trackingId) {
  try {
    const response = await axiosAPIBridgeInstance.post("/event/order/finish-delivery", {
      type: "FINISH_DELIVERY",
      trackingId,
    });
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function createOrder(
  order,
  packageData
) {
  try {
    const response = await axiosAPIBridgeInstance.post("/event/order/create", {
      type: "CREATE_ORDER",
      order: {
        address: order.address,
        city: order.city,
        state: order.state,
        postalCode: order.postalCode,
        shipTo: order.shipTo,
        associatedEmail: order.associatedEmail,
        packageRequest: {
          weight: packageData.weight,
          width: packageData.width,
          height: packageData.height,
        }
      }
    },
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        }
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
}