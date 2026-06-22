import SolutionDetail from '../SolutionDetail'
import heroBg from '@/assets/heroes/solutions-hero.jpg'
import image from '@/assets/modules/wms.jpg'
import { Warehouse, Smartphone, Boxes, ScanLine, MapPin, Calendar } from 'lucide-react'

export default function WmsPage() {
  return (
    <SolutionDetail
      slug="wms"
      eyebrow="Warehouse Management"
      title="Warehouse Management System (WMS)"
      heroBg={heroBg}
      image={image}
      metaDesc="A mobile-first WMS built for fast-moving D2C and marketplace brands. Real-time stock, picking, packing, putaway, batch and expiry tracking across multi-warehouse operations."
      intro="A mobile-first WMS built for fast-moving D2C and marketplace operations."
      paragraphs={[
        'The 100 Miles WMS is built around how warehouse teams actually work — on the floor, on a phone, on the move. Pickers, packers and managers operate on the same real-time data, with every action audited and synced back to your channels instantly.',
        'Multi-warehouse, multi-zone and multi-3PL — our WMS lets you scale operations across regions without re-platforming or hiring an army of admins.',
      ]}
      bullets={[
        'Real-time multi-warehouse, multi-zone stock visibility',
        'Mobile-first picking, packing and putaway',
        'Batch, expiry and serial number tracking',
        'Cycle counts and continuous inventory accuracy',
        'Native 3PL integrations across GCC, India and EU',
        'Configurable workflows per warehouse',
      ]}
      features={[
        { icon: Warehouse, title: 'Multi-warehouse stock', desc: 'Real-time visibility across every warehouse and 3PL.' },
        { icon: Smartphone, title: 'Mobile-first ops', desc: 'PWA apps for pickers, packers and supervisors.' },
        { icon: ScanLine, title: 'Barcode & RFID', desc: 'Native barcode scanning and RFID-ready flows.' },
        { icon: Boxes, title: 'Wave picking', desc: 'Batch, zone and wave picking to maximize throughput.' },
        { icon: Calendar, title: 'Batch & expiry', desc: 'FEFO/FIFO rules for regulated and perishable inventory.' },
        { icon: MapPin, title: 'Bin-level tracking', desc: 'Down to the bin, with putaway suggestions.' },
      ]}
      outcomes={[
        { value: '3×', label: 'Picker productivity' },
        { value: '99.6%', label: 'Inventory accuracy' },
        { value: '−45%', label: 'Dispatch errors' },
      ]}
    />
  )
}
