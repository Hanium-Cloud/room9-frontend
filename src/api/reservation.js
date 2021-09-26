import Axios from "axios";

export const bookRoom = async (roomId, startDate, finalDate, personnel, petWhether, aboutPayment) => {
    return await Axios.post(`/room/book/${roomId}`, {
        startDate: startDate,
        finalDate: finalDate,
        personnel: personnel,
        petWhether: petWhether,
        aboutPayment: aboutPayment,
    });
}