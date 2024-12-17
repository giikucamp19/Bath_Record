import React from 'react'

// 連続入浴記録を計算
function calcConsecutiveBathingDays(isBathed) {
  let consecutiveBathingDays = 1;
  let latestState = true;
  for(let i = isBathed.length - 2; i >= 0; i--) {
    if (isBathed[i] != latestState) {
      break;
    }
    consecutiveBathingDays++;
  }
  return consecutiveBathingDays;
}

// 連続キャンセル記録を計算
function calcConsecutiveCancelDays(isBathed) {
  let consecutiveCancelDays = 1;
  let latestState = false;
  for(let i = isBathed.length - 2; i >= 0; i--) {
    if (isBathed[i] != latestState) {
      break;
    }
    consecutiveCancelDays++;
  }
  return consecutiveCancelDays;
}

// キャンセル率を計算
function calcCancelationRate(isBathed) {
  let totalDays = isBathed.length;
  let totalCancelDays = 0;
  for(let i = 0; i < isBathed.length ; i++) {
    if (isBathed[i] == false) {
      totalCancelDays++;
    }
  }
  let cancelationRate = Math.floor(100 * (totalCancelDays / totalDays));
  return cancelationRate;
}

export const Data = (/*{ isBathed }*/) => {
  const isBathed = [true, true, false, true, true, true, true];
  //エラーチェック
  if (isBathed.length == 0) {
    return (
      <div>カレンダーのboolean配列が空です．開発者に問い合わせてください．</div>
    );
  }
  if (isBathed[isBathed.length - 1] == true){
    return (
      <>
        <div>
          今月のキャンセル率は{calcCancelationRate(isBathed)}%です
        </div>
        <div>
          入浴記録
          {calcConsecutiveBathingDays(isBathed)}日
          この調子で頑張りましょう！
        </div>
      </>
    );
  }
  else {
    return (
      <>
        <div>
          今月のキャンセル率は{calcCancelationRate(isBathed)}%です
        </div>
        <div>
          お風呂キャンセル記録
          {calcConsecutiveCancelDays(isBathed)}日
          今日こそお風呂に入りましょう！
        </div>
      </>
    );
  }
  
}
