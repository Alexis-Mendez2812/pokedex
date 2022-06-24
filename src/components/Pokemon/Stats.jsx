import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { map, capitalize } from 'lodash';

export default function Stats(props) {
   const { stats } = props;

   const barStyles = (num) => {
    const color = num>49 ? "#00a017": "#ff3e3e"
      return {
         backgroundColor: color,
         width: `${num}%`,
      };
   };

   return (
      <View style={styles.container}>
         <Text style={styles.title}>BASE STATS</Text>
         {map(stats, (item, index) => (
            <View key={index} style={styles.block}>
               <View style={styles.blockTitle}>
                  <Text style={styles.statName}>
                     {capitalize(item.stat.name)}:{' '}
                  </Text>
               </View>
               <View style={styles.blockInfo}>
                  <Text style={styles.num}>{item.base_stat}</Text>
                  <View style={styles.bgBar}>
                     <View
                        style={[styles.bar, barStyles(item.base_stat)]}
                     ></View>
                  </View>
               </View>
            </View>
         ))}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      paddingHorizontal: 20,
      marginTop: 40,
      marginBottom: 80,
   },
   title: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingBottom: 5,
   },
   block: {
      flexDirection: 'row',
      paddingVertical: 5,
   },
   blockTitle: {
      width: '30%',
   },
   statName: {
      fontSize: 12,
      color: 'grey',
   },
   blockInfo: {
      width: '70%',
      flexDirection: 'row',
      alignItems: 'center',
   },
   num: {
      width: '12%',
      fontSize: 12,
   },
   bgBar: {
      backgroundColor: '#dedede',
      width: '88%',
      height: 5,
      borderRadius: 20,
      overflow: 'hidden',
   },
   bar: {
      height: 5,
      borderRadius: 20,
   },
});
// import { View, Text, StyleSheet } from "react-native";
// import React from "react";
// import { map, capitalize } from "lodash";

// export default function Stats(props) {
// 	const { stats } = props;

//     // const barStyles=(num)=>{
//     //     return {
//     //         backgroundColor:"#ff3e3e",
//     //         width: `${num}`
//     //     }
//     // }
// 	return (
// 		<View style={styles.content}>
// 			<Text style={styles.title}>BASE Stats</Text>
// 			{map(stats, (item, index) => (
// 				<View key={index} style={styles.block}>
// 					<View style={styles.blockTitle}>
// 						<Text style={styles.statName}> {capitalize(item.stat.name)} </Text>
// 					</View>
// 					<View style={styles.blockInfo}>
// 						<Text style={styles.number}> {item.base_stat} </Text>
// 						<View style={styles.bgBar}>
//                             {/* <View style={[styles.Bar,barStyles(item.base_stat)]}></View> */}
//                         </View>
// 					</View>
// 				</View>
// 			))}
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	content: {
// 		paddingHorizontal: 20,
// 		marginTop: 40,
// 		marginBottom: 80,
// 	},
// 	title: {
// 		fontWeight: "bold",
// 		fontSize: 20,
// 		paddingTop: 5,
// 	},
// 	block: {
// 		flexDirection: "row",
// 		paddingVertical: 5,
// 	},
// 	blockTitle: {
// 		width: "30%",
// 	},
// 	statName: {
// 		fontSize: 12,
//         color:"#6b6b6b"
// 	},
// 	blockInfo: {
// 		width: "70%",
// 		flexDirection: "row",
// 		alignItems: "center",
// 	},
// 	number: {
// 		width: "12%",
// 		fontSize: 12,
// 	},
// 	bgBar: {
//         backgroundColor:"#dedede",
// 		width: "88%",
// 		height: 5,
// 		borderRadius: 20,
// 		overflow: "hidden",
// 	},
// 	Bar: {
// 		height: 5,
// 		borderRadius: 20,
// 		overflow: "hidden",
// 	},
// });
