import styled from "styled-components";

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;

export default function Menu() {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
    </StyledMenu>
  );
}

function Logo() {
  return (
    <svg className="logo" viewBox="0 0 454 87" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M120.721 14.1896C119.307 8.94024 115.168 4.80134 109.919 3.38805C100.329 0.763382 61.9683 0.763382 61.9683 0.763382C61.9683 0.763382 23.6077 0.763382 14.0176 3.2871C8.86917 4.70039 4.62931 8.94024 3.21603 14.1896C0.692307 23.7797 0.692307 43.6667 0.692307 43.6667C0.692307 43.6667 0.692307 63.6546 3.21603 73.1438C4.62931 78.3931 8.76822 82.532 14.0176 83.9453C23.7087 86.57 61.9683 86.57 61.9683 86.57C61.9683 86.57 100.329 86.57 109.919 84.0462C115.168 82.633 119.307 78.4941 120.721 73.2447C123.244 63.6546 123.244 43.7676 123.244 43.7676C123.244 43.7676 123.345 23.7797 120.721 14.1896V14.1896Z" fill="#FF0000" />
      <path d="M49.7535 25.294V62.0394L81.6533 43.6667L49.7535 25.294Z" fill="white" />
      {/* <path className="text" d="M433.558 63.2285C433.558 66.6608 433.659 69.2855 433.861 71.0016C434.063 72.7177 434.466 74.0301 435.173 74.7367C435.779 75.5443 436.788 75.9481 438.202 75.9481C440.019 75.9481 441.23 75.2415 441.937 73.8282C442.643 72.4149 442.946 70.0931 443.047 66.7618L453.445 67.3675C453.546 67.8722 453.546 68.4779 453.546 69.2855C453.546 74.232 452.233 77.9671 449.508 80.3899C446.782 82.8126 442.946 84.024 438 84.024C432.044 84.024 427.905 82.106 425.482 78.3709C423.059 74.6358 421.848 68.8817 421.848 61.0077V51.6194C421.848 43.5435 423.059 37.6885 425.583 33.9534C428.107 30.2183 432.347 28.4012 438.302 28.4012C442.441 28.4012 445.672 29.2088 447.893 30.723C450.114 32.2372 451.628 34.66 452.536 37.7894C453.445 41.0198 453.849 45.4615 453.849 51.1147V60.301H433.558V63.2285ZM435.072 37.8904C434.466 38.698 434.063 39.9093 433.861 41.6255C433.659 43.3416 433.558 45.9663 433.558 49.4995V53.3356H442.441V49.4995C442.441 46.0672 442.34 43.4426 442.139 41.6255C441.937 39.8084 441.432 38.597 440.826 37.8904C440.221 37.1837 439.211 36.7799 438 36.7799C436.586 36.679 435.678 37.0828 435.072 37.8904Z" fill="#282828" />
      <path className="text" d="M375.209 29.6126V83.4183H365.72L364.711 76.8567H364.408C361.884 81.8031 357.947 84.3269 352.799 84.3269C349.266 84.3269 346.641 83.1155 344.925 80.7937C343.209 78.4718 342.401 74.8377 342.401 69.7902V29.6126H354.515V69.0836C354.515 71.5064 354.818 73.2225 355.322 74.232C355.827 75.2415 356.736 75.7462 357.947 75.7462C358.957 75.7462 359.966 75.4434 360.976 74.7367C361.985 74.131 362.692 73.3234 363.096 72.3139V29.6126H375.209Z" fill="#282828" /> */}
      {/* <path className="text" d="M346.035 19.5177H334.022V83.3174H322.211V19.5177H310.198V9.72562H346.035V19.5177Z" fill="#282828" /> */}
      {/* <path className="text" d="M415.286 38.1932C414.579 34.761 413.368 32.3382 411.753 30.8239C410.138 29.3097 407.816 28.5021 404.989 28.5021C402.768 28.5021 400.648 29.1078 398.73 30.4202C396.812 31.6315 395.298 33.3477 394.289 35.3666H394.188V7H382.478V83.3174H392.472L393.683 78.2699H393.986C394.894 80.087 396.308 81.5003 398.226 82.6107C400.144 83.6202 402.163 84.2259 404.485 84.2259C408.623 84.2259 411.551 82.3079 413.469 78.5728C415.387 74.8377 416.397 68.8817 416.397 60.9067V52.427C416.296 46.2691 415.993 41.5245 415.286 38.1932ZM404.182 60.0991C404.182 64.0361 403.98 67.0646 403.677 69.2855C403.374 71.5064 402.768 73.1215 402.062 74.0301C401.254 74.9386 400.245 75.4434 399.033 75.4434C398.024 75.4434 397.115 75.2415 396.308 74.7367C395.5 74.232 394.793 73.5253 394.289 72.6168V42.1302C394.693 40.7169 395.399 39.5056 396.409 38.4961C397.418 37.5875 398.529 37.0828 399.639 37.0828C400.85 37.0828 401.86 37.5875 402.466 38.4961C403.172 39.5056 403.576 41.1207 403.879 43.3416C404.182 45.6634 404.283 48.8938 404.283 53.0327V60.0991H404.182Z" fill="#282828" /> */}
      <path className="text" fillRule="evenodd" clipRule="evenodd" d="M 41.6 70 L 0 70 L 0 0 L 9.5 0 L 9.5 61.5 L 41.6 61.5 L 41.6 70 Z" fill="#000" />
    </svg>
  )
}