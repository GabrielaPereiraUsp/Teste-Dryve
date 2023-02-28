import { FaHome, FaFileAlt } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io'
import { RiCarFill } from 'react-icons/ri'
import { TbVectorTriangle } from 'react-icons/tb'
import { FaMoneyBillAlt } from 'react-icons/fa'


export const menuRoutes = [
  {
    Icon: FaHome,
    to: '/',
    text: 'Home',
    //iconColor: '#FAFD79',
  },
  {
    Icon: IoMdPerson,
    to: '/',
    text: 'Clientes',
    //iconColor: '#65E2E9',
  },
  {
    Icon: RiCarFill,
    to: '/',
    text: 'Veículos',
    //iconColor: '#65E2E9',
  },
  {
    Icon: TbVectorTriangle,
    to: '/',
    text: 'Triangulação',
    //iconColor: '#65E2E9',
  },
  {
    Icon: FaMoneyBillAlt,
    to: '/',
    text: 'Financeiro',
    //iconColor: '#65E2E9',
  },
]