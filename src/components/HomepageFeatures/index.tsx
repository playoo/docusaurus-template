import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '基于 React 构建',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        利用 React 组件可以为您的项目扩展或自定义页面布局.
		得益于 Docusaurus 的插件架构,在设计您自己的 网站的同时,
		仍然能够重用由 Docusaurus 插件所创建的数据.
      </>
    ),
  },
  {
    title: '支持国际化',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        内置支持本地化翻译功能.可以通过 git Crowdin 或任何 翻译管理工具来翻译您的文档并能够独立部署.
      </>
    ),
  },
  {
    title: 文档版本化',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        让用户可以查看您的项目的所有版本的文档.文档版本化功能可以帮 您保持文档与项目版本的同步.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
