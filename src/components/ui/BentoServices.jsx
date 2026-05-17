import { useState } from "react";
import { TrendingUp, Users, Zap, Repeat2, MessageCircle } from "lucide-react";
import "./BentoServices.css";
import natacha from "../../assets/natacha.jpg"
import alex from "../../assets/marc.jpeg"
import eliah from "../../assets/eliah.jpg"

/* ══════════════════════════════════════
   TOOL ICONS — Figma, Notion, Slack, React, Tailwind, Vite
══════════════════════════════════════ */
const Icons = {
  Figma: () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="133" height="135" viewBox="0 0 133 135" fill="none">
    <path d="M47.2773 134.039C59.6422 134.039 69.6172 124.064 69.6172 111.699V89.3594H47.2773C34.9125 89.3594 24.9375 99.3344 24.9375 111.699C24.9375 124.064 34.9125 134.039 47.2773 134.039Z" fill="#0ACF83"/>
    <path d="M24.9375 67.0195C24.9375 54.6547 34.9125 44.6797 47.2773 44.6797H69.6172V89.3594H47.2773C34.9125 89.3594 24.9375 79.3844 24.9375 67.0195Z" fill="#A259FF"/>
    <path d="M24.9375 22.3398C24.9375 9.975 34.9125 0 47.2773 0H69.6172V44.6797H47.2773C34.9125 44.6797 24.9375 34.7047 24.9375 22.3398Z" fill="#F24E1E"/>
    <path d="M69.6172 0H91.957C104.322 0 114.297 9.975 114.297 22.3398C114.297 34.7047 104.322 44.6797 91.957 44.6797H69.6172V0Z" fill="#FF7262"/>
    <path d="M114.297 67.0195C114.297 79.3844 104.322 89.3594 91.957 89.3594C79.5922 89.3594 69.6172 79.3844 69.6172 67.0195C69.6172 54.6547 79.5922 44.6797 91.957 44.6797C104.322 44.6797 114.297 54.6547 114.297 67.0195Z" fill="#1ABCFE"/>
  </svg>
  ),
  Notion: () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="128" height="133" viewBox="0 0 128 133" fill="none">
    <path d="M7.9884 5.72592L81.4352 0.301699C90.4568 -0.47248 92.7749 0.0495944 98.4473 4.17309L121.892 20.6899C125.76 23.5301 127.047 24.3047 127.047 27.3975V117.98C127.047 123.657 124.985 127.014 117.769 127.528L32.4783 132.691C27.0625 132.948 24.4834 132.174 21.6472 128.559L4.38251 106.109C1.28579 101.977 0.00244141 98.8835 0.00244141 95.2687V14.752C0.00244141 10.1109 2.06444 6.23955 7.9884 5.72592Z" fill="white"/>
    <path d="M81.4352 0.301699L7.9884 5.72592C2.06444 6.23955 0.00244141 10.1109 0.00244141 14.752V95.2692C0.00244141 98.884 1.2853 101.977 4.38251 106.109L21.6472 128.559C24.4834 132.174 27.0625 132.948 32.4783 132.691L117.769 127.528C124.981 127.014 127.047 123.657 127.047 117.98V27.3975C127.047 24.464 125.888 23.6189 122.477 21.1147L121.889 20.6899L98.4473 4.17309C92.7749 0.0495944 90.4573 -0.47248 81.4352 0.301699ZM34.4073 25.9151C27.4431 26.3841 25.8635 26.4903 21.9082 23.2735L11.8514 15.2741C10.829 14.2389 11.3422 12.9466 13.9173 12.6901L84.5234 7.53134C90.4524 7.01373 93.5406 9.0797 95.8592 10.8851L107.969 19.6592C108.486 19.9197 109.774 21.4641 108.225 21.4641L35.31 25.8531L34.4073 25.9151ZM26.2883 117.206V40.3079C26.2883 36.9496 27.3191 35.4013 30.4073 35.1403L114.154 30.2376C116.995 29.981 118.278 31.786 118.278 35.1403V111.524C118.278 114.883 117.76 117.723 113.123 117.98L32.9825 122.625C28.3458 122.882 26.2883 121.338 26.2883 117.206ZM105.398 44.4309C105.912 46.7539 105.398 49.077 103.075 49.3425L99.213 50.1077V106.883C95.8592 108.688 92.7709 109.719 90.1908 109.719C86.0678 109.719 85.0366 108.427 81.9483 104.56L56.6892 64.8191V103.268L64.6792 105.077C64.6792 105.077 64.6791 109.723 58.2331 109.723L40.4598 110.754C39.9421 109.719 40.4598 107.139 42.2612 106.626L46.9018 105.338V54.5017L40.4602 53.9796C39.9421 51.6571 41.2295 48.3028 44.8403 48.0417L63.9099 46.7589L90.1913 87.0127V51.4005L83.4927 50.6303C82.9751 47.7852 85.0366 45.7192 87.6117 45.4671L105.398 44.4309Z" fill="black"/>
  </svg>
  ),
  Slack: () => (
    <svg viewBox="0 0 54 54" width="22" height="22">
      <path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#36C5F0"/>
      <path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#2EB67D"/>
      <path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ECB22E"/>
      <path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.249m14.336 0v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.249a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#E01E5A"/>
    </svg>
  ),
  React: () => (
    <svg viewBox="-11.5 -10.23 23 20.46" width="26" height="26">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 54 33" width="28" height="18">
      <defs>
        <linearGradient id="tg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2298BD"/>
          <stop offset="100%" stopColor="#0ED7B5"/>
        </linearGradient>
      </defs>
      <path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8 16.2 7.2 19.35 5.85 22.95 6.75c2.024.506 3.472 1.974 5.068 3.59C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.024-.506-3.472-1.974-5.068-3.59C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.024.506 3.472 1.974 5.068 3.59C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.024-.506-3.472-1.974-5.068-3.59C23.256 19.31 20.192 16.2 13.5 16.2z" fill="url(#tg2)"/>
    </svg>
  ),
  Node: () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="137" viewBox="0 0 137 137" fill="none">
    <path d="M122.351 59.1391C122.296 59.139 122.242 59.1554 122.196 59.1861L119.685 60.6525C119.637 60.6817 119.599 60.7228 119.572 60.7715C119.545 60.8203 119.532 60.8752 119.533 60.9308V63.8634C119.533 63.9876 119.592 64.0818 119.685 64.1438L122.196 65.608C122.241 65.6389 122.296 65.6553 122.351 65.6553C122.406 65.6553 122.46 65.6389 122.506 65.608L125.013 64.1438C125.06 64.1139 125.099 64.0724 125.127 64.0231C125.154 63.9739 125.168 63.9186 125.168 63.8623V60.9329C125.168 60.877 125.154 60.822 125.127 60.7731C125.1 60.7243 125.061 60.6835 125.013 60.6546L122.505 59.1872C122.459 59.1567 122.406 59.1392 122.351 59.1391ZM67.6653 76.6751C67.2083 76.6751 66.7534 76.7864 66.366 77.0047L54.0049 84.2047C53.6089 84.4374 53.2806 84.7696 53.0526 85.1684C52.8247 85.5672 52.705 86.0187 52.7056 86.478V100.845C52.7056 101.78 53.2001 102.654 54.0049 103.122L57.2587 104.991C58.8385 105.77 59.3961 105.768 60.1079 105.768C62.4304 105.768 63.763 104.335 63.763 101.872V87.6961C63.7616 87.5974 63.722 87.5031 63.6526 87.433C63.5831 87.363 63.4891 87.3226 63.3905 87.3204H61.8129C61.7138 87.322 61.6194 87.3622 61.5494 87.4323C61.4795 87.5024 61.4396 87.597 61.4382 87.6961V101.876C61.4382 102.966 60.2941 104.059 58.4671 103.125L55.0902 101.161C54.9661 101.099 54.9029 100.94 54.9029 100.816V86.4459C54.9029 86.3218 54.9661 86.1677 55.0902 86.1045L67.447 78.9366C67.5401 78.8745 67.6964 78.8745 67.8205 78.9366L80.1805 86.1045C80.3036 86.1677 80.3646 86.2907 80.3646 86.447V100.815C80.3646 100.97 80.3036 101.097 80.1805 101.16L67.8205 108.36C67.7274 108.422 67.5711 108.422 67.447 108.36L64.2885 106.455C64.1954 106.393 64.0712 106.362 63.9781 106.424C63.1111 106.923 62.9592 106.988 62.1222 107.269C61.9359 107.331 61.6266 107.454 62.2453 107.797L66.366 110.26C66.7684 110.478 67.2008 110.602 67.6653 110.602C68.1298 110.602 68.5933 110.479 68.9647 110.324L81.3257 103.124C81.7224 102.891 82.0511 102.558 82.2791 102.158C82.5071 101.758 82.6264 101.306 82.6251 100.846V86.478C82.6251 85.5426 82.1306 84.6724 81.3257 84.2047L68.9647 77.0047C68.5666 76.7864 68.1194 76.6729 67.6653 76.6751ZM86.9631 83.2361C86.3287 83.2386 85.7213 83.4929 85.2744 83.9431C84.8274 84.3932 84.5775 85.0024 84.5795 85.6368C84.5778 86.2709 84.8278 86.8799 85.2747 87.3298C85.7217 87.7797 86.3289 88.0339 86.9631 88.0364C88.2656 88.0364 89.3477 86.9458 89.3477 85.6368C89.3444 85.004 89.0925 84.3978 88.6465 83.9489C88.2004 83.5001 87.5958 83.2434 86.9631 83.2361ZM86.931 83.6417C87.1948 83.6385 87.4567 83.6877 87.7013 83.7865C87.946 83.8854 88.1686 84.0319 88.3561 84.2175C88.5436 84.4032 88.6924 84.6242 88.7937 84.8679C88.8951 85.1115 88.9469 85.3729 88.9463 85.6368C88.9463 86.7285 88.0473 87.6639 86.932 87.6639C85.8489 87.6639 84.9498 86.7585 84.9498 85.6368C84.9498 84.5151 85.8788 83.6417 86.931 83.6417ZM86.0651 84.2957V87.0378H86.5938V85.9504H87.0583C87.2445 85.9504 87.3056 86.0125 87.3366 86.1677C87.3366 86.1998 87.4286 86.8848 87.4286 87.0089H87.9852C87.9231 86.8848 87.8921 86.5102 87.861 86.2918C87.8311 85.9493 87.8011 85.6999 87.4286 85.6689C87.6149 85.6057 87.9242 85.5126 87.9242 85.0139C87.9242 84.2967 87.3034 84.2967 86.9952 84.2967L86.0651 84.2957ZM86.5307 84.7324H86.9631C87.1193 84.7324 87.3655 84.7324 87.3655 85.1059C87.3655 85.2301 87.3056 85.4816 86.9631 85.4816H86.5296L86.5307 84.7324ZM71.0432 86.8837C67.5112 86.8837 65.4048 88.38 65.4048 90.9049C65.4048 93.617 67.5112 94.362 70.888 94.7055C74.9445 95.1112 75.2549 95.7041 75.2549 96.5144C75.2549 97.9165 74.1375 98.5094 71.5356 98.5094C68.2519 98.5094 67.5401 97.6981 67.2918 96.0466C67.2918 95.8593 67.1398 95.7362 66.9536 95.7362H65.3427C65.2443 95.7374 65.1503 95.7772 65.081 95.8471C65.0117 95.917 64.9727 96.0114 64.9724 96.1098C64.9724 98.229 66.0866 100.723 71.5088 100.723C75.4101 100.723 77.6717 99.1623 77.6717 96.4202C77.6717 93.739 75.8736 93.023 72.0654 92.5242C68.223 92.0255 67.8216 91.7451 67.8216 90.8417C67.8216 90.0936 68.162 89.0971 71.0111 89.0971C73.551 89.0971 74.51 89.659 74.8824 91.3726C74.9011 91.4499 74.9446 91.519 75.0063 91.5692C75.0679 91.6195 75.1444 91.6482 75.2239 91.6509H76.8647C76.9589 91.6509 77.052 91.5899 77.1151 91.5278C77.1713 91.4444 77.2028 91.3468 77.2061 91.2463C76.9589 88.2548 75.0087 86.8837 71.0432 86.8837Z" fill="#5FA04E"/>
    <path d="M92.124 26.3982C91.9922 26.3962 91.8623 26.4291 91.7472 26.4934C91.6277 26.5636 91.5281 26.6632 91.4578 26.7827C91.3876 26.9022 91.349 27.0377 91.3459 27.1763V47.4362C91.3459 47.6225 91.2496 47.8109 91.0644 47.935C90.9788 47.9809 90.8832 48.0049 90.7861 48.0049C90.689 48.0049 90.5934 47.9809 90.5078 47.935L87.2262 46.0352C86.9853 45.8976 86.7127 45.8252 86.4353 45.8252C86.1579 45.8252 85.8852 45.8976 85.6443 46.0352L72.5137 53.6719C72.2708 53.8089 72.0683 54.0076 71.9268 54.248C71.7852 54.4884 71.7097 54.7619 71.7078 55.0408V70.2821C71.7078 70.8429 72.0182 71.3738 72.5137 71.6542L85.6465 79.2909C85.8872 79.4283 86.1597 79.5006 86.4369 79.5006C86.7141 79.5006 86.9865 79.4283 87.2273 79.2909L100.359 71.6542C100.855 71.3738 101.165 70.8429 101.165 70.2821V32.2892C101.165 31.6973 100.855 31.1654 100.359 30.886L92.5243 26.4934C92.4003 26.4313 92.2626 26.3987 92.124 26.3982ZM14.6494 45.4134C14.4022 45.4134 14.1549 45.5033 13.9387 45.6274L0.806006 53.2363C0.559187 53.3767 0.354351 53.5805 0.212664 53.8267C0.0709783 54.0728 -0.00241774 54.3523 6.07543e-05 54.6362L0.0321701 75.0813C0.0321701 75.3628 0.185225 75.6433 0.433537 75.7685C0.548651 75.844 0.683321 75.8842 0.82099 75.8842C0.95866 75.8842 1.09333 75.844 1.20844 75.7685L9.0153 71.2807C9.51086 71.0002 9.81804 70.4694 9.81804 69.9085V60.3399C9.81804 59.7791 10.1284 59.2482 10.6251 58.9678L13.9387 57.0359C14.186 56.8796 14.4664 56.8175 14.7447 56.8175C15.023 56.8175 15.3023 56.8796 15.5196 57.0359L18.8333 58.9678C19.3288 59.2482 19.6392 59.7791 19.6392 60.3399V69.9085C19.6392 70.4694 19.9475 71.0002 20.442 71.2807L28.1867 75.7685C28.3071 75.8453 28.4469 75.8861 28.5897 75.8861C28.7325 75.8861 28.8723 75.8453 28.9927 75.7685C29.116 75.7015 29.2186 75.602 29.2895 75.4809C29.3605 75.3598 29.397 75.2217 29.3951 75.0813V54.6362C29.3951 54.0754 29.0847 53.5445 28.5881 53.263L15.4875 45.6274C15.2668 45.5103 15.0254 45.4372 14.7768 45.4123L14.6494 45.4134ZM122.395 45.6381C122.124 45.6381 121.855 45.7088 121.607 45.85L108.472 53.4824C107.976 53.7629 107.669 54.2937 107.669 54.8557V70.0969C107.669 70.6577 107.976 71.1886 108.472 71.469L121.513 78.9473C121.747 79.0851 122.015 79.1577 122.287 79.1577C122.559 79.1577 122.827 79.0851 123.061 78.9473L130.96 74.5237C131.083 74.4565 131.186 74.357 131.257 74.236C131.327 74.1149 131.364 73.9768 131.362 73.8366C131.363 73.6967 131.327 73.5591 131.256 73.4384C131.185 73.3177 131.083 73.2186 130.96 73.1516L117.767 65.5138C117.647 65.4433 117.547 65.3433 117.476 65.2232C117.406 65.103 117.368 64.9669 117.365 64.8278V60.0584C117.364 59.9186 117.4 59.781 117.471 59.6603C117.542 59.5396 117.644 59.4404 117.767 59.3734L121.887 57.0038C122.008 56.927 122.147 56.8862 122.29 56.8862C122.433 56.8862 122.573 56.927 122.693 57.0038L126.81 59.3724C126.93 59.4424 127.031 59.5424 127.102 59.6625C127.172 59.7826 127.211 59.919 127.214 60.0584V63.7992C127.214 64.0807 127.368 64.3611 127.616 64.4853C127.736 64.5623 127.876 64.6032 128.019 64.6032C128.162 64.6032 128.302 64.5623 128.423 64.4853L136.226 59.9043C136.466 59.7647 136.663 59.5639 136.8 59.3226C136.936 59.0813 137.005 58.8081 137.001 58.5311V54.8225C137.001 54.2616 136.691 53.734 136.226 53.4525L123.186 45.849C122.945 45.7113 122.673 45.6383 122.396 45.6371L122.395 45.6381ZM86.4353 57.0198C86.5049 57.0198 86.5755 57.0359 86.6386 57.068L91.1275 59.686C91.2517 59.7481 91.3148 59.9022 91.3148 60.0274V65.2634C91.3148 65.4196 91.2517 65.5459 91.1275 65.608L86.6376 68.226C86.5746 68.2568 86.5054 68.2728 86.4353 68.2728C86.3652 68.2728 86.296 68.2568 86.233 68.226L81.743 65.608C81.6189 65.5459 81.5557 65.3886 81.5557 65.2634V60.0274C81.5557 59.8711 81.6199 59.7481 81.743 59.6849L86.233 57.068C86.2958 57.0354 86.3646 57.0188 86.4353 57.0198Z" fill="#333333"/>
    <path d="M51.356 45.9089C51.1157 45.7707 50.8433 45.6979 50.5661 45.6979C50.2889 45.6979 50.0165 45.7707 49.7762 45.9089L36.7355 53.4835C36.4965 53.623 36.2988 53.8234 36.1627 54.0643C36.0265 54.3052 35.9568 54.5779 35.9606 54.8546V70.0327C35.9606 70.5946 36.271 71.1244 36.7355 71.4048L49.7762 78.9784C50.0165 79.1166 50.2889 79.1893 50.5661 79.1893C50.8433 79.1893 51.1157 79.1166 51.356 78.9784L64.3956 71.4048C64.8911 71.1244 65.1705 70.5946 65.1705 70.0327V54.8546C65.1705 54.2937 64.8601 53.7629 64.3956 53.4835L51.356 45.9089Z" fill="url(#paint0_linear_82_76)"/>
    <path d="M64.4264 53.4835L51.3247 45.9089C51.1961 45.8438 51.0613 45.7918 50.9223 45.7537L36.2397 71.0302C36.3639 71.1865 36.518 71.3106 36.6732 71.4048L49.776 78.9784C50.1474 79.1967 50.5809 79.2588 50.9833 79.1336L64.7679 53.7639C64.6773 53.6453 64.5604 53.5493 64.4264 53.4835Z" fill="url(#paint1_linear_82_76)"/>
    <path d="M64.4265 71.4038C64.7989 71.1854 65.0772 70.8119 65.2014 70.4062L50.8592 45.7216C50.4889 45.6595 50.0854 45.6906 49.745 45.9089L36.7354 53.4514L50.7671 79.1956C50.9523 79.1646 51.1696 79.1025 51.3558 79.0083L64.4265 71.4038Z" fill="url(#paint2_linear_82_76)"/>
    <defs>
      <linearGradient id="paint0_linear_82_76" x1="55.8763" y1="51.5491" x2="43.9671" y2="75.6931" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3F873F"/>
        <stop offset="0.33" stop-color="#3F8B3D"/>
        <stop offset="0.637" stop-color="#3E9638"/>
        <stop offset="0.934" stop-color="#3DA92E"/>
        <stop offset="1" stop-color="#3DAE2B"/>
      </linearGradient>
      <linearGradient id="paint1_linear_82_76" x1="48.5842" y1="64.2161" x2="81.8123" y2="39.8164" gradientUnits="userSpaceOnUse">
        <stop offset="0.138" stop-color="#3F873F"/>
        <stop offset="0.402" stop-color="#52A044"/>
        <stop offset="0.713" stop-color="#64B749"/>
        <stop offset="0.908" stop-color="#6ABF4B"/>
      </linearGradient>
      <linearGradient id="paint2_linear_82_76" x1="35.4834" y1="62.4385" x2="65.6581" y2="62.4385" gradientUnits="userSpaceOnUse">
        <stop offset="0.092" stop-color="#6ABF4B"/>
        <stop offset="0.287" stop-color="#64B749"/>
        <stop offset="0.598" stop-color="#52A044"/>
        <stop offset="0.862" stop-color="#3F873F"/>
      </linearGradient>
    </defs>
  </svg>
  ),
};

const INTEGRATED_TOOLS = [
  { name: "Figma",    Icon: Icons.Figma,    bg: "#1e1428", color: "#a259ff" },
  { name: "Notion",   Icon: Icons.Notion,   bg: "#1a1a1a", color: "#ffffff" },
  { name: "Slack",    Icon: Icons.Slack,    bg: "#1a0e24", color: "#e01e5a" },
  { name: "React",    Icon: Icons.React,    bg: "#0e1e28", color: "#61DAFB" },
  { name: "Tailwind", Icon: Icons.Tailwind, bg: "#041420", color: "#38bdf8" },
  { name: "Node",     Icon: Icons.Node,     bg: "#14041e", color: "#bd34fe" },
];

/* Chart — grouped pairs like the reference (short bar + tall bar side by side) */
const BARS = [
  [20, 35], [15, 28], [25, 45], [30, 50],
  [22, 40], [18, 35], [28, 60], [20, 38],
  [15, 30], [25, 48], [35, 75], [30, 65],
  [28, 55], [20, 42]
];

/* Avatars for invite — real gradient rings like the image */
const AVATARS = [
  {
    name: "Eliah",
    bg: "#111",
    ring: "#a78bfa",
    img: eliah
  },
  {
    name: "Natacha",
    bg: "#222",
    ring: "#38bdf8",
    img: natacha
  },
  {
    name: "Alex",
    bg: "#333",
    ring: "#a3e635",
    img: alex
  }
];
export default function BentoServices() {
  const [hoveredAvatar, setHoveredAvatar] = useState(null);

  return (
    <div className="bento-grid">

      {/* ══ 1. MAXIMUM CREATIVITY — tall left card ══ */}
      <div className="bento-card bento-accent">
        <div className="bento-accent-circle bento-accent-circle--1" />
        <div className="bento-accent-circle bento-accent-circle--2" />
        <div className="bento-accent-body">
          <p className="bento-badge-label">
            <span className="bento-badge-dot" />
            Explore what i offer
          </p>
          <h3 className="bento-accent-h3">Maximum<br/>creativity</h3>
          <p className="bento-accent-p">Engage audience with unique style.</p>
        </div>
      </div>

      {/* ══ 2. INVITE PEOPLE ══ */}
      <div className="bento-card bento-invite">
        <div className="bento-invite-top">
          <div className="bento-invite-avatars">
            {AVATARS.map((a, i) => (
              <div
                key={i}
                className="bento-avatar-wrap"
                style={{ zIndex: 10 - i, marginLeft: i === 0 ? 0 : -18 }}
                onMouseEnter={() => setHoveredAvatar(i)}
                onMouseLeave={() => setHoveredAvatar(null)}
              >
                <div
                  className="bento-avatar"
                  style={{
                    backgroundColor: a.bg,
                    backgroundImage: `url(${a.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: `0 0 0 3px ${a.ring}, 0 0 14px ${a.ring}55`
                  }}
                />

                <span
                  className={
                    "bento-invite-eliah" +
                    (hoveredAvatar === i ? " bento-invite-eliah--visible" : "")
                  }
                  style={{ background: a.ring }}
                >
                  {a.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bento-foot">
          <div>
            <p className="bento-foot-title">Collaboration in real-time</p>
          </div>
        </div>
      </div>

      {/* ══ 3. TRACK PROGRESS — chart ══ */}
      <div className="bento-card bento-chart">
        <p className="bento-growth-label">Growth</p>
        <div className="bento-chart-inner">
          {/* Vertical date separator lines */}
          <div className="bento-chart-lines">
            <div className="bento-vline" /><div className="bento-vline" /><div className="bento-vline" />
          </div>
          {/* Bars pushed to the right, left side fades out */}
          <div className="bento-chart-bars">
            {BARS.map(([short, tall], i) => (
              <div key={i} className="bento-bar-group">
                <div className="bento-bar bento-bar--short" style={{ height: short, animationDelay: `${i * 0.05}s` }}/>
                <div className="bento-bar bento-bar--tall"  style={{ height: tall,  animationDelay: `${i * 0.05 + 0.07}s` }}/>
              </div>
            ))}
          </div>
          {/* Left fade overlay */}
          <div className="bento-chart-fade" />
        </div>
        <div className="bento-chart-dates">
          <span>Nov. 10</span><span>Nov. 11</span><span>Today</span>
        </div>
        <div className="bento-foot">
          <div>
            <p className="bento-foot-title">You can track progress</p>
            <p className="bento-foot-sub">Blazing fast delivery timing, no fuzz.</p>
          </div>
        </div>
      </div>

      {/* ══ 4. DESIGN ITERATIONS — curve with grid ══ */}
      <div className="bento-card bento-curve">
        <div className="bento-curve-area">
          {/* Subtle background grid lines */}
          <svg className="bento-gridlines" viewBox="0 0 280 110" preserveAspectRatio="none">
            {[0, 56, 112, 168, 224, 280].map(x => (
              <line key={x} x1={x} y1="0" x2={x} y2="110" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4"/>
            ))}
          </svg>
          {/* Curve */}
          <svg className="bento-curve-svg" viewBox="0 0 280 110" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cg" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#cccccb" stopOpacity="0.05"/>
                <stop offset="50%" stopColor="#cccccb" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#cccccb" stopOpacity="1"/>
              </linearGradient>
            </defs>

            <path
              d="
                M0 105
                C25 95, 55 92, 80 94
                S90 50, 100 40
                S115 140, 120 90
                S155 70, 165 50
                S175 35, 190 28
                S210 50, 290 -5
              "
              stroke="url(#cg)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />

            <circle cx="192" cy="28" r="5" fill="#cccccb"/>
            <circle cx="192" cy="28" r="12" fill="#cccccb" opacity="0.2"/>
            <circle cx="192" cy="28" r="20" fill="#cccccb" opacity="0.08"/>
          </svg>
        </div>
        <div className="bento-foot">
          {/* <div className="bento-foot-icon bento-foot-icon--green"><Repeat2 size={14} strokeWidth={2}/></div> */}
          <div>
            <p className="bento-foot-title">Design iterations</p>
            <p className="bento-foot-sub">Get as many design tweaks as you'd like.</p>
          </div>
        </div>
      </div>

      {/* ══ 5. FAST ITERATIONS — two stacked notifications ══ */}
      <div className="bento-card bento-fast">
        <div className="bento-fast-stack">
          {/* Top card — old/background, slightly scaled and offset */}
          <div className="bento-notif bento-notif--behind">
            <div className="bento-notif-icon-box bento-notif-icon-box--grey">
              <Repeat2 size={13} strokeWidth={2} color="rgba(255,255,255,0.4)"/>
            </div>
            <div className="bento-notif-lines">
              <div className="bento-nline bento-nline--w60"/>
              <div className="bento-nline bento-nline--w80"/>
            </div>
          </div>
          {/* Front card — new design notification */}
          <div className="bento-notif bento-notif--front">
            <div className="bento-notif-row">
              <div className="bento-notif-icon-box bento-notif-icon-box--yellow">
                <Zap size={13} fill="#a3e635" stroke="none"/>
              </div>
              <div>
                <div className="bento-notif-new-badge">
                  <span className="bento-notif-dot"/><span>NEW</span>
                </div>
                <p className="bento-notif-name">Latest design</p>
                <p className="bento-notif-time">Today, 11:50</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bento-foot">
          <div>
            <p className="bento-foot-title">Fast iterations</p>
          </div>
        </div>
      </div>

      {/* ══ 6. CUSTOM SUPPORT — chat bubble ══ */}
      <div className="bento-card bento-support">
        <div className="bento-support-row">
          <div className="bento-support-avatar-wrap">
            <div className="bento-support-avatar">
              <img src={natacha} alt="Support" />
            </div>
            <span className="bento-support-badge">1</span>
          </div>
          {/* Message bubble */}
          <div className="bento-support-bubble">
            <p className="bento-support-from">Tiona says:</p>
            <p className="bento-support-msg">Hey there!<br/>How can I help you?</p>
          </div>
        </div>
        <div className="bento-foot">
          <div>
            <p className="bento-foot-title">Custom support</p>
            {/* <p className="bento-foot-sub">Always here when you need it.</p> */}
          </div>
        </div>
      </div>

      {/* ══ 7. 100% INTEGRATED — 2×3 tool grid ══ */}
      <div className="bento-card bento-integrated">
        <div className="bento-tools-grid">
          {INTEGRATED_TOOLS.map(({ name, Icon, bg, color }) => (
            <div
              key={name}
              className="bento-tool-pill"
              title={name}
              style={{
                background: "rgba(20, 20, 20, 0.75)",
                // boxShadow: `0 0 18px ${color}45`,
                border: `1px solid ${"#232323"}`,
                borderRadius: "10000px"
              }}
            >
              <Icon/>
            </div>
          ))}
        </div>
        <div className="bento-foot">
          <div>
            <p className="bento-foot-title">100% Integrated</p>
            <p className="bento-foot-sub">Seamlessly connect all your existing apps.</p>
          </div>
        </div>
      </div>

    </div>
  );
}