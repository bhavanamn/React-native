import { StatusBar } from 'react-native';
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'; // Import TouchableOpacity from react-native
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation(); // Add parentheses after useNavigation

  return (
    <View style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
      <StatusBar style="light" />
      <Image
        style={{ position: 'absolute', height: '100%', width: '100%' }}
        source={require('../assets/images/background.png')}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', width: '100%' }}>
        <Image style={{ height: 225, width: 90 }} source={require('../assets/images/light.png')} />
        <Image style={{ height: 160, width: 65 }} source={require('../assets/images/light.png')} />
        <Image style={{ height: 225, width: 90 }} source={require('../assets/images/light.png')} />
      </View>
      {/* title and form */}
      <View style={{ height: '100%', width: '100%', justifyContent: 'space-around', paddingTop: 40, paddingBottom: 10 }}>
        {/* title */}
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 28 }}>
            Login
          </Text>
        </View>

        {/* form */}
        <View style={{ alignItems: 'center', marginHorizontal: 7 }}>
          <View style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 10, borderRadius: 10, width: '100%', marginBottom: 10 }}>
            <TextInput placeholder='Email' placeholderTextColor='gray' style={{ color: 'black' }} />
          </View>

          <View style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 10, borderRadius: 10, width: '100%', marginBottom: 10 }}>
            <TextInput placeholder='Password' placeholderTextColor='gray' style={{ color: 'black' }} secureTextEntry />
          </View>

          <TouchableOpacity style={{ width: '100%', backgroundColor: 'blue', padding: 10, borderRadius: 10, marginBottom: 10 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Login</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ color: 'black' }}>Don't have an account!! </Text>
            <TouchableOpacity onPress={() => navigation.push('Signup')}>
              <Text style={{ color: 'skyblue' ,fontWeight: 'bold'}}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

// import { StatusBar } from 'react-native';
// import React from 'react';
// import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'; // Import TouchableOpacity from react-native
// import { useNavigation } from '@react-navigation/native';
// // import Animated,{ FadeIn, FadeOut } from 'react-native-reanimated';


// export default function LoginScreen() {
//     const navigation = useNavigation();
//   return (
//     <View style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
//       <StatusBar style="light" />
//       <Image
//         style={{ position: 'absolute', height: '100%', width: '100%' }}
//         source={require('../assets/images/background.png')}
//       />
//       <View style={{ flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', width: '100%' }}>
//         <Image style={{ height: 225, width: 90 }} source={require('../assets/images/light.png')} />
//         <Image style={{ height: 160, width: 65 }} source={require('../assets/images/light.png')} />
//         <Image style={{ height: 225, width: 90 }} source={require('../assets/images/light.png')} />
//       </View>
//       {/* title and form */}
//       <View style={{ height: '100%', width: '100%', justifyContent: 'space-around', paddingTop: 40, paddingBottom: 10 }}>
//         {/* title */}
//         <View style={{ alignItems: 'center' }}>
//           <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 28 }}>
//             Login
//           </Text>
//         </View>

//         {/* form */}
//         <View style={{ alignItems: 'center', marginHorizontal: 7 }}>
//           <View style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 10, borderRadius: 10, width: '100%', marginBottom: 10 }}>
//             <TextInput placeholder='Email' placeholderTextColor='gray' style={{ color: 'black' }} />
//             {/* <TextInput 
//   placeholder='Email' 
//   placeholderTextColor='gray' 
//   style={{ color: 'black' }} 
//   keyboardType='email-address' // Specify the keyboardType prop
// /> */}

//           </View>

//           <View style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 10, borderRadius: 10, width: '100%', marginBottom: 10 }}>
//             <TextInput placeholder='Password' placeholderTextColor='gray' style={{ color: 'black' }} secureTextEntry />
//           </View>

//           <TouchableOpacity style={{ width: '100%', backgroundColor: 'blue', padding: 10, borderRadius: 10, marginBottom: 10 }}>
//             <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Login</Text>
//           </TouchableOpacity>

//           <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//             <Text style={{ color: 'black' }}>Don't have an account!! </Text>
//             <TouchableOpacity onPress = () =>navigation.push('SignUp') />
//             </View></View>
//             </View>>
//               <Text style={{ color: 'skyblue' }}>SignUp</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

