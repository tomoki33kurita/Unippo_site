import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Section from 'components/section'
import SectionBody from 'components/section-body'
import IconHedding from 'components/icon-hedding'
import Image from 'next/image'
import eyecatch from 'images/top_img.png'
import styles from 'styles/index.module.css'
import Button from 'components/button'
import Grid from 'components/grid'
import Box from 'components/box'
import Card from 'components/card'
import Describe from 'components/describe'

export default function Activity() {
  return (
    <Container>
      <figure className={styles.fullWidth}>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="100vw"
          placeholder='blur'
          style={{ transition: '0.2s' }}
        />
      </figure>
      <Section>
        <SectionBody centerOn>
          「居心地の良い場所」が学びの場となるように
        </SectionBody>
        <Grid rows='grid2'>
          <div>私達は子どもたちにとって居心地の良い場所が学びの場所となれるように活動をしています。平日の日中に学校の外で過ごせる学びの場と、学校の中で教室以外の場所で過ごせる学びの場を運営しています。</div>
          <div style={{position:'relative'}}>
            <Image
              src='/testimg_001.png'
              alt=""
              layout='fill'
              objectFit='cover'
            />
          </div>
        </Grid>
      </Section>
      <Section fullWidth>
        <IconHedding color='blue' borderOff>私たちの向き合う社会課題</IconHedding>
        <SectionBody centerOn>
          学校に行きたくない子たちの学び場の選択肢の不足
        </SectionBody>
        <Grid rows = 'grid2'>
          <Describe imgOn img='/testimg_001.png'>
          </Describe>
          <Describe>
            <div>
              本当は学校に行きたい<br />
              様々な事情により、学校に行きたくてもいけない子どもたちがたくさんいます。<br />
              しかし、学校の教室以外の学びの選択肢が不足している現状があります。<br />
              学校に行けないことで、学びと成長の機会が損なわれてしまうことは、子どもたちの将来に大きな影響を及ぼすことになります。<br />
            </div>
          </Describe>
        </Grid>
      </Section>
      <Section>
        <Grid rows = 'grid2'>
          <Describe imgOn img='/testimg_001.png'>
          </Describe>
          <Describe>
            <div>
              本当は学校に行きたい<br />
              様々な事情により、学校に行きたくてもいけない子どもたちがたくさんいます。<br />
              しかし、学校の教室以外の学びの選択肢が不足している現状があります。<br />
              学校に行けないことで、学びと成長の機会が損なわれてしまうことは、子どもたちの将来に大きな影響を及ぼすことになります。<br />
            </div>
          </Describe>
        </Grid>
      </Section>
      <Section fullWidth color='green'>
        <IconHedding color='red' borderOff>私たちのミッション</IconHedding>
        <SectionBody centerOn>
          学校に行きたくない子たちの学び場の選択肢の不足
        </SectionBody>
        <Grid rows = 'grid2'>
          <Describe imgOn img='/testimg_001.png'>
          </Describe>
          <Describe>
            <div>
              安全・安心の確保<br />
              様々な事情により、学校に行きたくてもいけない子どもたちがたくさんいます。<br />
              しかし、学校の教室以外の学びの選択肢が不足している現状があります。<br />
              学校に行けないことで、学びと成長の機会が損なわれてしまうことは、子どもたちの将来に大きな影響を及ぼすことになります。<br />
            </div>
          </Describe>
        </Grid>
      </Section>
      <Section>
        <Grid rows = 'grid2'>
          <Describe imgOn img='/testimg_001.png'>
          </Describe>
          <Describe>
            <div>
              本当は学校に行きたい<br />
              様々な事情により、学校に行きたくてもいけない子どもたちがたくさんいます。<br />
              しかし、学校の教室以外の学びの選択肢が不足している現状があります。<br />
              学校に行けないことで、学びと成長の機会が損なわれてしまうことは、子どもたちの将来に大きな影響を及ぼすことになります。<br />
            </div>
          </Describe>
        </Grid>
      </Section>
      <Section fullWidth color='red'>
        <IconHedding color='yellow' borderOff>私たちのビジョン</IconHedding>
        <SectionBody centerOn>
          誰もが自分らしく学べる社会に
        </SectionBody>
        <div style={{maxWidth:'600px',margin:'0 auto'}}>
          <Image
            src={eyecatch}
            alt=""
            layout="responsive"
            sizes="100vw"
            placeholder='blur'
            style={{ transition: '0.2s' }}
          />
          <div style={{backgroundColor:'white',padding:'var(--space-xs)'}}>
            子どもだけではなく、大人になってからも、自分の個性や才能に合う学びの機会が、いつもあたりまえのように存在している。
            そのような社会を、私たちは目指していきたいと考えています。
            私たちの活動が、そのような社会を実現するための小さくとも大きな一歩であると信じています。
          </div>
        </div>
      </Section>
      <Section fullWidth color='bgImg'>
        <IconHedding color='blue'>サポーターになる</IconHedding>
        <SectionBody>
          子どもたちの学び場の選択肢を増やすために、皆様のお力をお貸し下さい。
        </SectionBody>
        <Grid rows='grid2'>
          <Card>
            皆様からのご支援が子どもたちの笑顔を<br />生み出します。<br />応援をよろしくお願いいたします。
          </Card>
          <Card title='スタッフとして支援'>
            皆様からのご支援が子どもたちの笑顔を<br />生み出します。<br />応援をよろしくお願いいたします。
          </Card>
        </Grid>
      </Section>
    </Container>
  )
}
