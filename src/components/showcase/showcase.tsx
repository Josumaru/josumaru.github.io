import { NextPage } from 'next';
import ShowcaseCard from './showcase-card';
import { ShowcaseType } from '@/types/showcase';
import SectionTitle from '../common/section-title';
import { ShowcaseImageConstants } from '@/constants/showcase-image-constants';

const Showcase: NextPage = ({}) => {
  const data: ShowcaseType[] = [
    {
      subtitle: 'Innovation competition and exhibition at Universitas Muhammadiyah Surakarta that took place over 5 days.',
      alt: 'UMS IID',
      url: 'https://ums-iid.com/',
      image: ShowcaseImageConstants.umsiid,
      title: 'UMS International Innovation Day 2024'
    },
    {
      subtitle: 'Anime streaming platform that utilizes data scraping from the samehadaku.care website.',
      alt: 'Raijin',
      url: 'https://github.com/Josumaru/raijin',
      image: ShowcaseImageConstants.raijin,
      title: 'Raijin'
    },
    {
      subtitle: 'Online health consultation that presents many cute and funny assistants who are ready to answer',
      alt: 'Virtual Doctor',
      url: 'https://vido.josumaru.my.id/',
      image: ShowcaseImageConstants.vido,
      title: 'VIDO - Virtual Doctor'
    },
    {
      subtitle: 'This is my web portofilio made with the latest technology and integrated',
      alt: 'Josumaru Portfolio Websites',
      url: 'https://josumaru.my.id',
      image: ShowcaseImageConstants.josumaru,
      title: 'Josumaru Portfolio Websites'
    },
    {
      subtitle: 'Anugerah Coating Powder Blora Business Landing Page which provides various services',
      alt: 'Anugearah Coating Powder',
      url: 'https://anugerahpowdercoating.com/',
      image: ShowcaseImageConstants.anugerah,
      title: 'Anugerah Coating Powder'
    },
    {
      subtitle: 'FOSTIFEST is an annual activity organized by the Forum Open Source Teknik Informatika (FOSTI) UMS.',
      alt: 'Fostifest 2024',
      url: 'https://fostifest.fostiums.org/',
      image: ShowcaseImageConstants.fostifest,
      title: 'Fostifest 2024'
    },
    {
      subtitle: 'SHEESH is an intelligent hybrid market analysis mobile app designed to empower MSMEs',
      alt: 'Sheesh',
      url: '#',
      image: ShowcaseImageConstants.sheesh,
      title: 'Sheesh'
    },
    {
      subtitle: 'Fospresence is a mobile application designed to streamline attendance tracking for participants in FOSTI UMS',
      alt: 'Fospresence',
      url: '#',
      image: ShowcaseImageConstants.fospresence,
      title: 'Fospresence'
    },
    {
      subtitle: 'Pineleafcare is the pioneer of shoe, bag and stroller care solutions in Indonesia',
      alt: 'Pineleaf',
      url: 'https://pineleaf.id',
      image: ShowcaseImageConstants.pineleaf,
      title: 'Pineleaf'
    }
  ];

  return (
    <div id='showcase' className='hidden md:flex items-center justify-center flex-col'>
      <SectionTitle data={{ title: 'Hall of Fame', subtile: 'Projects I have worked on' }} />
      <div className='container mx-3'>
        <div className='w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
          <div className='flex items-center justify-center md:justify-start animate-infinite-scroll'>
            {data.map((data, index) => (
              <ShowcaseCard key={index} data={data} />
            ))}
          </div>
          <div className='flex items-center justify-center md:justify-start animate-infinite-scroll'>
            {data.map((data, index) => (
              <ShowcaseCard key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
