// 체결내역 차트 목데이터
export const mockOrderbookData = [
  // [1~10일] 박스권 횡보
  { time: '01/01', price: 4995, volume: 18, change_rate: 0.0 },
  { time: '01/02', price: 4999, volume: 21, change_rate: 0.1 },
  { time: '01/03', price: 4994, volume: 24, change_rate: -0.1 },
  { time: '01/04', price: 4995, volume: 23, change_rate: 0.0 },
  { time: '01/05', price: 5000, volume: 20, change_rate: 0.1 },
  { time: '01/06', price: 5180, volume: 25, change_rate: 3.6 },
  { time: '01/07', price: 5485, volume: 45, change_rate: 5.9 },
  { time: '01/08', price: 5027, volume: 40, change_rate: -8.3 },
  { time: '01/09', price: 5351, volume: 42, change_rate: 6.5 },
  { time: '01/10', price: 4965, volume: 41, change_rate: -7.2 },

  // [11~20일] 급등 (머리1)
  { time: '01/11', price: 5636, volume: 50, change_rate: 13.5 },
  { time: '01/12', price: 5820, volume: 55, change_rate: 3.3 },
  { time: '01/13', price: 5321, volume: 50, change_rate: -8.6 },
  { time: '01/14', price: 5610, volume: 53, change_rate: 5.4 },
  { time: '01/15', price: 5372, volume: 52, change_rate: -4.2 },
  { time: '01/16', price: 5635, volume: 55, change_rate: 4.9 },
  { time: '01/17', price: 5488, volume: 52, change_rate: -2.6 },
  { time: '01/18', price: 5747, volume: 56, change_rate: 4.7 },
  { time: '01/19', price: 5927, volume: 60, change_rate: 3.1 },
  { time: '01/20', price: 5861, volume: 58, change_rate: -1.1 },

  // [21~30일] 눌림목 조정
  { time: '01/21', price: 5635, volume: 52, change_rate: -3.9 },
  { time: '01/22', price: 5487, volume: 50, change_rate: -2.6 },
  { time: '01/23', price: 5345, volume: 48, change_rate: -2.6 },
  { time: '01/24', price: 5272, volume: 46, change_rate: -1.4 },
  { time: '01/25', price: 5192, volume: 45, change_rate: -1.5 },
  { time: '01/26', price: 5155, volume: 44, change_rate: -0.7 },
  { time: '01/27', price: 5120, volume: 43, change_rate: -0.7 },
  { time: '01/28', price: 5090, volume: 42, change_rate: -0.6 },
  { time: '01/29', price: 5050, volume: 41, change_rate: -0.8 },
  { time: '01/30', price: 5030, volume: 40, change_rate: -0.4 },

  // [31~40일] 기영이 진입, 재상승 준비 (머리2)
  { time: '01/31', price: 5230, volume: 45, change_rate: 4.0 },
  { time: '02/01', price: 5395, volume: 48, change_rate: 3.2 },
  { time: '02/02', price: 5520, volume: 50, change_rate: 2.3 },
  { time: '02/03', price: 5650, volume: 53, change_rate: 2.4 },
  { time: '02/04', price: 5775, volume: 55, change_rate: 2.2 },
  { time: '02/05', price: 5905, volume: 57, change_rate: 2.3 },
  { time: '02/06', price: 6030, volume: 60, change_rate: 2.1 },
  { time: '02/07', price: 6140, volume: 62, change_rate: 1.8 },
  { time: '02/08', price: 6270, volume: 65, change_rate: 2.1 },
  { time: '02/09', price: 6335, volume: 67, change_rate: 1.0 },

  // [41~50일] 돌파 급등 (머리3)
  { time: '02/10', price: 6545, volume: 70, change_rate: 3.3 },
  { time: '02/11', price: 6890, volume: 75, change_rate: 5.3 },
  { time: '02/12', price: 7150, volume: 78, change_rate: 3.8 },
  { time: '02/13', price: 7480, volume: 80, change_rate: 4.6 },
  { time: '02/14', price: 7680, volume: 85, change_rate: 2.7 },
  { time: '02/15', price: 7860, volume: 88, change_rate: 2.3 },
  { time: '02/16', price: 8040, volume: 90, change_rate: 2.3 },
  { time: '02/17', price: 8230, volume: 93, change_rate: 2.4 },
  { time: '02/18', price: 8340, volume: 95, change_rate: 1.3 },
  { time: '02/19', price: 8425, volume: 98, change_rate: 1.0 },

  // [51~60일] 과열 후 조정
  { time: '02/20', price: 8340, volume: 95, change_rate: -1.0 },
  { time: '02/21', price: 8250, volume: 92, change_rate: -1.1 },
  { time: '02/22', price: 8130, volume: 90, change_rate: -1.5 },
  { time: '02/23', price: 7900, volume: 85, change_rate: -2.8 },
  { time: '02/24', price: 7700, volume: 80, change_rate: -2.5 },
  { time: '02/25', price: 7600, volume: 75, change_rate: -1.3 },
  { time: '02/26', price: 7500, volume: 70, change_rate: -1.3 },
  { time: '02/27', price: 7400, volume: 68, change_rate: -1.3 },
  { time: '02/28', price: 7300, volume: 65, change_rate: -1.4 },
  { time: '02/29', price: 7200, volume: 62, change_rate: -1.4 },
]
