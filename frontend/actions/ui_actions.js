export const ON_MODAL = 'ON_MODAL';
export const OFF_MODAL = 'OFF_MODAL';

export const turnOnModal = () => {
  return {
    type: ON_MODAL
  };
};

export const turnOffModal = () => {
  return {
    type: OFF_MODAL
  };
};
