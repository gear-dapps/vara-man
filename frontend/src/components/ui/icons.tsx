import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  Github,
  HelpCircle,
  Image,
  Loader2,
  LucideProps,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  Trash,
  Twitter,
  User,
  X,
  Home,
  type Icon as LucideIcon,
  LogOut,
  ArrowLeft,
  ChevronFirst,
  ChevronLast,
  ChevronsLeft,
  ChevronsRight,
  SortAsc,
  SortDesc,
  Filter,
  ArrowUpDown,
  ChevronsUpDown,
  Download,
  MoreHorizontal,
  List,
  Edit,
  Users,
  Newspaper,
  CalendarDays,
  Globe,
  ChevronsUp,
  ChevronDown,
  ChevronUp,
  CalendarPlus,
  ListPlus,
  Undo,
  Redo,
  Upload,
  ListX,
  ArrowUpAZ,
  ArrowDownAZ,
} from 'lucide-react'

export type Icon = LucideIcon

export const Icons = {
  close: X,
  spinner: Loader2,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  moreHorizontal: MoreHorizontal,
  moreVertical: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  twitter: Twitter,
  check: Check,
  home: Home,
  logout: LogOut,
  first: ChevronsLeft,
  last: ChevronsRight,
  left: ChevronLeft,
  right: ChevronRight,
  sortAsc: SortAsc,
  sortDesc: SortDesc,
  filter: Filter,
  arrowUpDown: ArrowUpDown,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  chevronsUpDown: ChevronsUpDown,
  download: Download,
  list: List,
  edit: Edit,
  logo: ({ ...props }: LucideProps) => (
    <svg
      width="92"
      height="60"
      viewBox="0 0 92 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_273_151233)">
        <path
          d="M17.9287 22.1352L12.0764 0H7.94296L17.9287 37.7691V52.1831L4.13341 0H0L15.862 60H17.9287H19.9941H22.0608V0H17.9287V22.1352Z"
          fill="currentColor"
        />
        <path
          d="M91.4938 60L75.6318 0H73.5651H71.4984H69.4317V59.9987H73.5651L84.4745 49.0843L87.3603 59.9987H91.4938V60ZM80.8074 35.2084L73.5663 42.4494V7.81694L80.8074 35.2084ZM73.5651 54.1502V48.2941L82.0285 39.8307L83.2534 44.4619L73.5651 54.1502Z"
          fill="currentColor"
        />
        <path
          d="M30.7688 0H28.7021H26.6354V59.9987H30.7688L41.6782 49.0843L44.5641 59.9987H48.6975L32.8342 0H30.7688ZM38.0098 35.2083L30.7688 42.4494V7.81694L38.0098 35.2083ZM30.7688 54.1502V48.2941L39.2322 39.8307L40.4571 44.4619L30.7688 54.1502Z"
          fill="currentColor"
        />
        <path
          d="M65.8567 37.0722L56.0563 0H53.9896H51.9228H49.8561V59.9987H53.9896V48.8725L57.7865 45.0756L61.7321 59.9987L65.8567 59.9685L61.0554 41.8067L62.5739 40.2882L65.8567 37.0722ZM53.9896 43.0278V7.81694L61.3516 35.6658L53.9896 43.0278Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_273_151233">
          <rect width="91.6667" height="60" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
  gameJoystick: ({ ...props }: LucideProps) => (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.625 6.77841C18.4681 6.08747 18.1101 5.45846 17.5962 4.97068C17.0823 4.48291 16.4355 4.15821 15.7373 4.03753C15.0391 3.91686 14.3208 4.0056 13.673 4.29257C13.0252 4.57954 12.4768 5.0519 12.0971 5.65008H7.90292C7.52318 5.0519 6.97483 4.57954 6.32701 4.29257C5.67919 4.0056 4.9609 3.91686 4.26272 4.03753C3.56454 4.15821 2.91771 4.48291 2.40381 4.97068C1.8899 5.45846 1.53192 6.08747 1.375 6.77841C0.583333 10.2784 -0.818333 16.4538 2.68167 17.2472C4.56417 17.6738 5.83875 16.0805 6.73833 13.9763C6.78458 13.9788 6.83 13.9834 6.87667 13.9834C7.24141 13.9836 7.60242 13.9099 7.93786 13.7667C8.27331 13.6234 8.57623 13.4137 8.82833 13.1501H11.175C11.4269 13.4135 11.7296 13.6231 12.0647 13.7663C12.3998 13.9096 12.7605 13.9834 13.125 13.9834C13.1717 13.9834 13.2171 13.9788 13.2633 13.9763C14.1629 16.0822 15.4375 17.6738 17.32 17.2472C20.82 16.4538 19.42 10.278 18.625 6.77841ZM15.2083 5.65008C15.3319 5.65008 15.4528 5.68674 15.5556 5.75541C15.6583 5.82409 15.7385 5.9217 15.7858 6.0359C15.8331 6.15011 15.8454 6.27577 15.8213 6.39701C15.7972 6.51825 15.7377 6.62962 15.6503 6.71702C15.5629 6.80443 15.4515 6.86396 15.3303 6.88807C15.209 6.91219 15.0834 6.89981 14.9692 6.85251C14.855 6.8052 14.7573 6.72509 14.6887 6.62231C14.62 6.51953 14.5833 6.39869 14.5833 6.27508C14.5833 6.10932 14.6492 5.95035 14.7664 5.83314C14.8836 5.71593 15.0426 5.65008 15.2083 5.65008ZM13.9583 6.90008C14.0819 6.90008 14.2028 6.93674 14.3056 7.00541C14.4083 7.07409 14.4885 7.1717 14.5358 7.2859C14.5831 7.40011 14.5954 7.52577 14.5713 7.64701C14.5472 7.76825 14.4877 7.87961 14.4003 7.96702C14.3129 8.05443 14.2015 8.11396 14.0803 8.13807C13.959 8.16219 13.8334 8.14981 13.7192 8.10251C13.605 8.0552 13.5073 7.97509 13.4387 7.87231C13.37 7.76953 13.3333 7.64869 13.3333 7.52508C13.3333 7.35932 13.3992 7.20035 13.5164 7.08314C13.6336 6.96593 13.7926 6.90008 13.9583 6.90008ZM4.79167 9.40008C4.62591 9.40008 4.46694 9.33423 4.34973 9.21702C4.23252 9.09981 4.16667 8.94084 4.16667 8.77508V8.15008H3.54167C3.37591 8.15008 3.21694 8.08423 3.09973 7.96702C2.98251 7.84981 2.91667 7.69084 2.91667 7.52508C2.91667 7.35932 2.98251 7.20035 3.09973 7.08314C3.21694 6.96593 3.37591 6.90008 3.54167 6.90008H4.16667V6.27508C4.16667 6.10932 4.23252 5.95035 4.34973 5.83314C4.46694 5.71593 4.62591 5.65008 4.79167 5.65008C4.95743 5.65008 5.1164 5.71593 5.23361 5.83314C5.35082 5.95035 5.41667 6.10932 5.41667 6.27508V6.90008H6.04167C6.20743 6.90008 6.3664 6.96593 6.48361 7.08314C6.60082 7.20035 6.66667 7.35932 6.66667 7.52508C6.66667 7.69084 6.60082 7.84981 6.48361 7.96702C6.3664 8.08423 6.20743 8.15008 6.04167 8.15008H5.41667V8.77508C5.41667 8.94084 5.35082 9.09981 5.23361 9.21702C5.1164 9.33423 4.95743 9.40008 4.79167 9.40008ZM6.875 12.7334C6.58657 12.7334 6.30462 12.6479 6.06479 12.4876C5.82497 12.3274 5.63805 12.0996 5.52768 11.8332C5.4173 11.5667 5.38842 11.2735 5.44469 10.9906C5.50096 10.7077 5.63985 10.4478 5.8438 10.2439C6.04775 10.0399 6.3076 9.90104 6.59049 9.84477C6.87338 9.7885 7.1666 9.81738 7.43308 9.92776C7.69956 10.0381 7.92732 10.2251 8.08756 10.4649C8.2478 10.7047 8.33333 10.9866 8.33333 11.2751C8.33333 11.6619 8.17969 12.0328 7.9062 12.3063C7.63271 12.5798 7.26177 12.7334 6.875 12.7334ZM13.125 12.7334C12.8366 12.7334 12.5546 12.6479 12.3148 12.4876C12.075 12.3274 11.8881 12.0996 11.7777 11.8332C11.6673 11.5667 11.6384 11.2735 11.6947 10.9906C11.751 10.7077 11.8899 10.4478 12.0938 10.2439C12.2978 10.0399 12.5576 9.90104 12.8405 9.84477C13.1234 9.7885 13.4166 9.81738 13.6831 9.92776C13.9496 10.0381 14.1773 10.2251 14.3376 10.4649C14.4978 10.7047 14.5833 10.9866 14.5833 11.2751C14.5833 11.6619 14.4297 12.0328 14.1562 12.3063C13.8827 12.5798 13.5118 12.7334 13.125 12.7334ZM15.2083 9.40008C15.0847 9.40008 14.9639 9.36343 14.8611 9.29475C14.7583 9.22607 14.6782 9.12846 14.6309 9.01426C14.5836 8.90005 14.5712 8.77439 14.5953 8.65315C14.6195 8.53191 14.679 8.42055 14.7664 8.33314C14.8538 8.24573 14.9652 8.18621 15.0864 8.16209C15.2076 8.13797 15.3333 8.15035 15.4475 8.19766C15.5617 8.24496 15.6593 8.32507 15.728 8.42785C15.7967 8.53063 15.8333 8.65147 15.8333 8.77508C15.8333 8.94084 15.7675 9.09981 15.6503 9.21702C15.5331 9.33423 15.3741 9.40008 15.2083 9.40008ZM16.4583 8.15008C16.3347 8.15008 16.2139 8.11343 16.1111 8.04475C16.0083 7.97607 15.9282 7.87846 15.8809 7.76426C15.8336 7.65005 15.8212 7.52439 15.8453 7.40315C15.8695 7.28191 15.929 7.17055 16.0164 7.08314C16.1038 6.99573 16.2152 6.93621 16.3364 6.91209C16.4576 6.88797 16.5833 6.90035 16.6975 6.94766C16.8117 6.99496 16.9093 7.07507 16.978 7.17785C17.0467 7.28063 17.0833 7.40147 17.0833 7.52508C17.0833 7.69084 17.0175 7.84981 16.9003 7.96702C16.7831 8.08423 16.6241 8.15008 16.4583 8.15008Z"
        fill="white"
      />
    </svg>
  ),
}
