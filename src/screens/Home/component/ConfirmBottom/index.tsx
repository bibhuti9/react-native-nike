/* eslint-disable react/self-closing-comp */
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
export default function ConfirmBottom({children, refRBSheet}) {
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.6)',
          width: '100%',
          alignSelf: 'center',
        },
        container: {
          borderRadius: 20,
          height: 300,
        },
      }}>
      {children}
    </RBSheet>
  );
}
