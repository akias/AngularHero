//hero属性的类型是Hero。 
//Hero类仍然在app.component.ts文件中。 
//现在，有两个组件需要Hero类的引用。
//所以我们需要把hero类单独提出来

export class Hero {
  id: number;
  name: string;
}
