import React from "react";

type LogoProps = {
 color?: string;
 width?: number;
 height?: number;
};

const Logo: React.FC<LogoProps> = ({ color, width, height }) => {
 return (
  <svg
   width={width ? `${width}px` : "138px"}
   height={height ? `${height}px` : "30px"}
   viewBox="0 0 138 30"
   version="1.1"
   xmlns="http://www.w3.org/2000/svg"
   fill={color ? color : "black"}
   fillOpacity="0.8"
  >
   <title>Group 7</title>
   <desc>Created with Sketch.</desc>
   <g id="Mockup" stroke="none" stroke-width="1" fill-rule="evenodd">
    <g
     id="Virtual-Appointment-Landing-Page-Template-Mockup"
     transform="translate(-256.000000, -81.000000)"
     fill-rule="nonzero"
    >
     <g id="Group-7" transform="translate(256.000000, 81.000000)">
      <polygon
       id="Path"
       points="2.9826087 29.6982609 2.9826087 7.15826087 13.6773913 29.6982609 15.4243478 29.6982609 26.1191304 7.07304348 26.1191304 29.6982609 29.1017391 29.6982609 29.1017391 0.29826087 26.3321739 0.29826087 14.5721739 25.3947826 2.76956522 0.29826087 0 0.29826087 0 29.6982609"
      ></polygon>
      <path
       d="M43.0973913,29.9965217 C46.2788406,29.9965217 48.877971,29.1372464 50.8947826,27.4186957 C52.9115942,25.7001449 53.92,23.1649275 53.92,19.8130435 L53.92,19.8130435 L53.92,0.29826087 L50.9373913,0.29826087 L50.9373913,19.8130435 C50.9373913,22.4263768 50.2414493,24.3650725 48.8495652,25.6291304 C47.4576812,26.8931884 45.5402899,27.5252174 43.0973913,27.5252174 C40.6544928,27.5252174 38.73,26.8931884 37.323913,25.6291304 C35.9178261,24.3650725 35.2147826,22.4263768 35.2147826,19.8130435 L35.2147826,19.8130435 L35.2147826,0.29826087 L32.2321739,0.29826087 L32.2321739,19.8130435 C32.2321739,23.1649275 33.2476812,25.7001449 35.2786957,27.4186957 C37.3097101,29.1372464 39.915942,29.9965217 43.0973913,29.9965217 Z"
       id="Path"
      ></path>
      <polygon
       id="Path"
       points="70.6852174 29.6982609 70.6852174 27.3973913 59.9904348 27.3973913 59.9904348 0.29826087 57.0078261 0.29826087 57.0078261 29.6982609"
      ></polygon>
      <polygon
       id="Path"
       points="78.8426087 29.6982609 78.8426087 2.72695652 86.5547826 2.72695652 86.5547826 0.29826087 68.1904348 0.29826087 68.1904348 2.72695652 75.9026087 2.72695652 75.9026087 29.6982609"
      ></polygon>
      <path
       d="M104.950234,1.49213975e-13 C109.168495,1.49213975e-13 112.199445,1.41318841 114.043086,4.23956522 C115.886726,7.06594203 116.020216,10.6521739 114.443554,14.9982609 C112.866893,19.3443478 110.131397,22.9305797 106.237067,25.7569565 C102.342736,28.5833333 98.2864402,29.9965217 94.0681793,29.9965217 C89.8499185,29.9965217 86.8021887,28.5904348 84.92499,25.7782609 C83.0865021,22.9376812 82.9555887,19.3443478 84.53225,14.9982609 C86.1089113,10.6521739 88.8515087,7.06594203 92.7600422,4.23956522 C96.6685757,1.41318841 100.731973,1.49213975e-13 104.950234,1.49213975e-13 Z M101.389182,6 C98.4614094,6 95.6808525,6.96054889 93.0475115,8.88164666 C90.4141705,10.8027444 88.5164153,13.3361921 87.354246,16.4819897 C86.1920766,19.6277873 86.2157229,22.1672384 87.4251846,24.1003431 C88.6346464,26.0334477 90.6972145,27 93.612889,27 C96.5285635,27 99.2970221,26.0394511 101.918265,24.1183533 C104.572576,22.1732419 106.480816,19.6277873 107.642985,16.4819897 C108.805154,13.3361921 108.785339,10.8027444 107.58354,8.88164666 C106.381741,6.96054889 104.316955,6 101.389182,6 Z"
       id="Combined-Shape"
      ></path>
      <path
       d="M126.714783,0.29826087 L127.122524,0.302366395 C130.216783,0.365317784 132.58058,1.15221014 134.213913,2.66304348 C135.918261,4.23956522 136.770435,6.23507246 136.770435,8.64956522 C136.770435,11.064058 136.102899,13.0169565 134.767826,14.5082609 C133.432754,15.9995652 131.444348,16.9156522 128.802609,17.2565217 L128.802609,17.2565217 L137.153913,29.6982609 L133.276522,29.6982609 L125.308696,17.3843478 L120.706957,17.3843478 L120.706957,29.6982609 L117.724348,29.6982609 L117.724348,0.29826087 L126.714783,0.29826087 Z M126.714783,2.72695652 L120.706957,2.72695652 L120.706957,14.9556522 L126.714783,14.9556522 C131.401739,14.9556522 133.745217,12.9175362 133.745217,8.84130435 C133.745217,4.76507246 131.401739,2.72695652 126.714783,2.72695652 L126.714783,2.72695652 Z"
       id="Combined-Shape"
      ></path>
     </g>
    </g>
   </g>
  </svg>
 );
};
export default Logo;
