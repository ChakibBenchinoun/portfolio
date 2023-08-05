import clsx from "clsx";

export function LogoSite({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 75 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("w-8 h-8", className)}
    >
      <path
        d="M9.353 20.261C7.51633 20.261 5.902 19.8357 4.51 18.985C3.118 18.115 2.016 16.9163 1.204 15.389C0.411333 13.8423 0.015 12.0637 0.015 10.053C0.015 8.39033 0.285667 6.94033 0.827 5.703C1.36833 4.46567 2.09333 3.43133 3.002 2.6C3.93 1.76867 4.974 1.15 6.134 0.743999C7.294 0.337998 8.50233 0.134998 9.759 0.134998C10.9383 0.134998 12.0403 0.260665 13.065 0.511999C14.0897 0.763332 15.124 1.14033 16.168 1.643C16.0327 2.31967 15.9457 3.04467 15.907 3.818C15.8683 4.572 15.849 5.34533 15.849 6.138C15.5977 6.23467 15.327 6.312 15.037 6.37C14.747 6.40867 14.4377 6.428 14.109 6.428C14.0703 5.11333 13.877 4.09833 13.529 3.383C13.181 2.66767 12.6977 2.17467 12.079 1.904C11.4797 1.63333 10.774 1.498 9.962 1.498C8.82133 1.498 7.83533 1.72033 7.004 2.165C6.192 2.59033 5.525 3.17033 5.003 3.905C4.50033 4.62033 4.12333 5.442 3.872 6.37C3.64 7.298 3.524 8.26467 3.524 9.27C3.524 10.9713 3.79467 12.5083 4.336 13.881C4.89667 15.2537 5.70867 16.346 6.772 17.158C7.83533 17.9507 9.13067 18.347 10.658 18.347C11.5473 18.347 12.456 18.202 13.384 17.912C14.312 17.622 15.1723 17.2257 15.965 16.723C16.1003 16.8197 16.2163 16.9743 16.313 17.187C16.429 17.3803 16.5063 17.5543 16.545 17.709C15.4623 18.5597 14.3603 19.1977 13.239 19.623C12.137 20.0483 10.8417 20.261 9.353 20.261ZM23.1683 0.308999C23.555 0.328333 24.0287 0.347666 24.5893 0.366999C25.15 0.386332 25.6817 0.395998 26.1843 0.395998C26.6677 0.395998 27.1703 0.395998 27.6923 0.395998C28.2143 0.376665 28.7363 0.366999 29.2583 0.366999C29.7803 0.347666 30.2733 0.337999 30.7373 0.337999C32.0133 0.337999 33.1347 0.463666 34.1013 0.714999C35.068 0.966333 35.822 1.40133 36.3633 2.02C36.924 2.63867 37.2043 3.499 37.2043 4.601C37.2043 5.819 36.8273 6.863 36.0733 7.733C35.3193 8.603 34.2753 9.14433 32.9413 9.357C34.024 9.415 34.9907 9.618 35.8413 9.966C36.692 10.2947 37.3687 10.807 37.8713 11.503C38.374 12.199 38.6253 13.127 38.6253 14.287C38.6253 15.3503 38.374 16.317 37.8713 17.187C37.388 18.057 36.605 18.7433 35.5223 19.246C34.459 19.7487 33.0573 20 31.3173 20C30.7373 20 30.0607 20 29.2873 20C28.5333 20 27.76 20 26.9673 20C26.194 20.0193 25.469 20.029 24.7923 20.029C24.1157 20.0483 23.5647 20.0677 23.1393 20.087C23.1393 19.797 23.149 19.536 23.1683 19.304C23.1877 19.0527 23.2263 18.8497 23.2843 18.695C23.8063 18.6563 24.2123 18.5597 24.5023 18.405C24.7923 18.231 24.9953 17.941 25.1113 17.535C25.2467 17.129 25.3143 16.5393 25.3143 15.766V4.34C25.3143 3.644 25.2563 3.122 25.1403 2.774C25.0243 2.40667 24.8213 2.14567 24.5313 1.991C24.2413 1.83633 23.8353 1.73967 23.3133 1.701C23.2553 1.527 23.2167 1.31433 23.1973 1.063C23.178 0.811666 23.1683 0.560333 23.1683 0.308999ZM28.5043 1.411V15.824C28.5043 16.6167 28.5817 17.216 28.7363 17.622C28.891 18.028 29.1617 18.2987 29.5483 18.434C29.935 18.55 30.457 18.608 31.1143 18.608C32.429 18.608 33.4053 18.26 34.0433 17.564C34.6813 16.868 35.0003 15.911 35.0003 14.693C35.0003 13.823 34.836 13.1077 34.5073 12.547C34.1787 11.9863 33.7243 11.561 33.1443 11.271C32.5837 10.981 31.9553 10.778 31.2593 10.662C30.5827 10.546 29.8963 10.488 29.2003 10.488H28.0403V9.096H29.4323C30.5923 9.096 31.4817 8.93167 32.1003 8.603C32.7383 8.255 33.183 7.81033 33.4343 7.269C33.6857 6.70833 33.8113 6.109 33.8113 5.471C33.8113 4.52367 33.5987 3.77933 33.1733 3.238C32.748 2.69667 32.2163 2.31967 31.5783 2.107C30.9597 1.875 30.341 1.759 29.7223 1.759C29.4517 1.759 29.1907 1.77833 28.9393 1.817C28.7073 1.85567 28.427 1.92333 28.0983 2.02L28.5043 1.411ZM39.8642 0.308999C40.1735 0.328333 40.5602 0.347666 41.0242 0.366999C41.5075 0.366999 42.0102 0.376665 42.5322 0.395998C43.0735 0.395998 43.5762 0.395998 44.0402 0.395998C44.5235 0.395998 44.9102 0.395998 45.2002 0.395998V15.766C45.2002 16.5007 45.2678 17.071 45.4032 17.477C45.5385 17.883 45.7995 18.1633 46.1862 18.318C46.5728 18.4727 47.1045 18.55 47.7812 18.55L47.6072 20C47.0658 20 46.4278 20 45.6932 20C44.9778 20 44.2335 20 43.4602 20C42.7062 20.0193 42.0102 20.029 41.3722 20.029C40.7342 20.0483 40.2315 20.0677 39.8642 20.087C39.8642 19.797 39.8738 19.536 39.8932 19.304C39.9125 19.0527 39.9512 18.8497 40.0092 18.695C40.5312 18.6563 40.9372 18.5597 41.2272 18.405C41.5172 18.231 41.7202 17.941 41.8362 17.535C41.9522 17.129 42.0102 16.5393 42.0102 15.766V4.34C42.0102 3.644 41.9522 3.122 41.8362 2.774C41.7202 2.40667 41.5172 2.14567 41.2272 1.991C40.9372 1.83633 40.5312 1.73967 40.0092 1.701C39.9512 1.527 39.9125 1.31433 39.8932 1.063C39.8738 0.811666 39.8642 0.560333 39.8642 0.308999ZM53.3782 14.867C53.7262 14.9443 54.0162 15.041 54.2482 15.157C54.4995 15.273 54.7218 15.418 54.9152 15.592C54.7025 16.2493 54.5188 16.984 54.3642 17.796C54.2288 18.5887 54.1128 19.3427 54.0162 20.058C53.6102 20.0387 53.0688 20.029 52.3922 20.029C51.7348 20.029 50.9905 20.0193 50.1592 20C49.3472 20 48.4965 20 47.6072 20L47.7812 18.55H48.0132C49.2892 18.55 50.2558 18.4147 50.9132 18.144C51.5898 17.854 52.1022 17.4383 52.4502 16.897C52.7982 16.3557 53.1075 15.679 53.3782 14.867ZM51.4062 6.921C51.3868 7.40433 51.3675 7.92633 51.3482 8.487C51.3482 9.02833 51.3482 9.56967 51.3482 10.111C51.3482 10.6717 51.3482 11.2517 51.3482 11.851C51.3675 12.4503 51.3868 13.0013 51.4062 13.504C51.1162 13.504 50.8455 13.4943 50.5942 13.475C50.3622 13.4363 50.1302 13.388 49.8982 13.33C49.8208 12.3633 49.5598 11.706 49.1152 11.358C48.6898 11.01 47.9068 10.836 46.7662 10.836H44.7362V9.444H46.7662C47.9262 9.444 48.7188 9.28933 49.1442 8.98C49.5888 8.67067 49.8208 8.06167 49.8402 7.153C50.1108 7.05633 50.3718 6.99833 50.6232 6.979C50.8745 6.94033 51.1355 6.921 51.4062 6.921ZM53.2912 0.308999C53.3298 0.734333 53.3782 1.237 53.4362 1.817C53.4942 2.397 53.5618 2.96733 53.6392 3.528C53.7165 4.06933 53.8035 4.55267 53.9002 4.978C53.7262 5.11333 53.5038 5.21 53.2332 5.268C52.9818 5.326 52.6918 5.355 52.3632 5.355C52.3052 4.73633 52.1408 4.15633 51.8702 3.615C51.5995 3.05433 51.1355 2.6 50.4782 2.252C49.8402 1.88467 48.9218 1.701 47.7232 1.701H44.5042L45.1712 0.395998C46.6792 0.395998 47.9745 0.395998 49.0572 0.395998C50.1398 0.376665 51.0292 0.357332 51.7252 0.337999C52.4212 0.318666 52.9432 0.308999 53.2912 0.308999ZM71.1377 20.174L57.7397 2.6C57.4884 2.27133 57.2371 2.05867 56.9857 1.962C56.7344 1.846 56.3574 1.759 55.8547 1.701C55.7967 1.48833 55.7581 1.25633 55.7387 1.005C55.7194 0.734332 55.7097 0.502333 55.7097 0.308999C55.9031 0.328333 56.1351 0.347666 56.4057 0.366999C56.6957 0.366999 56.9857 0.376665 57.2757 0.395998C57.5851 0.395998 57.8654 0.395998 58.1167 0.395998C58.5034 0.395998 58.8901 0.386332 59.2767 0.366999C59.6634 0.347666 59.9921 0.328333 60.2627 0.308999L71.3407 15.07L71.1377 20.174ZM55.7097 20.087C55.7097 19.797 55.7194 19.5457 55.7387 19.333C55.7581 19.101 55.7967 18.8883 55.8547 18.695C56.3961 18.6757 56.8117 18.5403 57.1017 18.289C57.3917 18.0377 57.5947 17.6027 57.7107 16.984C57.8461 16.3653 57.9137 15.5147 57.9137 14.432V2.281L59.5087 2.31V14.432C59.5087 15.5147 59.5667 16.3653 59.6827 16.984C59.7987 17.6027 60.0017 18.0377 60.2917 18.289C60.5817 18.5403 60.9974 18.6757 61.5387 18.695C61.6161 18.8883 61.6644 19.101 61.6837 19.333C61.7031 19.5457 61.7127 19.797 61.7127 20.087C61.4227 20.0677 61.0941 20.0483 60.7267 20.029C60.3787 20.029 60.0307 20.0193 59.6827 20C59.3347 20 59.0157 20 58.7257 20C58.4551 20 58.1167 20 57.7107 20C57.3241 20.0193 56.9471 20.029 56.5797 20.029C56.2317 20.0483 55.9417 20.0677 55.7097 20.087ZM71.1377 20.174L71.0217 16.897V5.848C71.0217 4.76533 70.9637 3.934 70.8477 3.354C70.7317 2.774 70.5191 2.35833 70.2097 2.107C69.9197 1.85567 69.5041 1.72033 68.9627 1.701C68.9047 1.37233 68.8564 1.11133 68.8177 0.917998C68.7984 0.705332 68.7887 0.502333 68.7887 0.308999C69.0787 0.328333 69.3881 0.347666 69.7167 0.366999C70.0647 0.366999 70.4127 0.376665 70.7607 0.395998C71.1087 0.395998 71.4181 0.395998 71.6887 0.395998C72.1141 0.395998 72.5877 0.386332 73.1097 0.366999C73.6511 0.347666 74.1151 0.328333 74.5017 0.308999C74.5017 0.540999 74.4921 0.772999 74.4727 1.005C74.4534 1.237 74.4147 1.469 74.3567 1.701C73.9121 1.72033 73.5641 1.85567 73.3127 2.107C73.0614 2.339 72.8777 2.75467 72.7617 3.354C72.6651 3.934 72.6167 4.76533 72.6167 5.848V20C72.4234 20.058 72.1914 20.0967 71.9207 20.116C71.6694 20.1547 71.4084 20.174 71.1377 20.174Z"
        fill="#F3F4F6"
      />
      <path
        d="M19.6883 20.29C19.031 20.29 18.509 20.1063 18.1223 19.739C17.755 19.3523 17.5713 18.8593 17.5713 18.26C17.5713 17.6607 17.784 17.158 18.2093 16.752C18.6347 16.346 19.176 16.143 19.8333 16.143C20.4907 16.143 20.9933 16.3557 21.3413 16.781C21.7087 17.2063 21.8923 17.6413 21.8923 18.086C21.8923 18.8013 21.6797 19.3523 21.2543 19.739C20.829 20.1063 20.307 20.29 19.6883 20.29Z"
        fill="#84CC16"
      />
    </svg>
  );
}
