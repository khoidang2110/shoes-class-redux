import { BUY_SHOE, CHANGE_QUANTITY, REMOVE_SHOE, VIEW_DETAIL } from "../constant/shoe";

export const buyShoeAction = (shoe) => ({
  type: BUY_SHOE,
  payload: shoe,
});
export let changeQuantityAction = (id, option) => {
  return {
    type: CHANGE_QUANTITY,
    payload: {
      id,
      option,
    },
  };
};
export const handleRemoveAction = (id) => ({
  type: REMOVE_SHOE,
  payload: id,
});

export const handleViewDetailAction = (shoe) => ({
  type:VIEW_DETAIL,
  payload:shoe,
})

