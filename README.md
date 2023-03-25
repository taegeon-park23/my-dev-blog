# My Dev Blog!

## Breif Descrpition 
Development my blog for dev-logs.

## How to Install and Set up Project?
To be Determined

## Features
TBD

Provide a list of features or functionality included in the project. This will give users an idea of what the project can do and how they can use it.

## How to use 
Add a section on how to use the project. This should include details on how to run the project, any command-line arguments or configuration options, and any other relevant usage information.

## how to trobuleshot common issue or problmes
If necessary, include a section on how to troubleshoot common issues or problems that users may encounter.


<br>

# COMMIT Convernion

## 1. Commit message structure
```text
type : subject

body

footer
```

## 2. Commit type
- feat : 새로운 기능 추가
- fix : 버그 수정
- design : CSS 등 사용자 UI 디자인 변경
- !BREAKING CHANGE : 커다란 API 변경
- !HOTFIX : 급하게 치명적인 버그, 수정을 해야하는 경우
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor : 코드 리팩토링
- comment : 필요한 주석 추가 및 변경
- test : test code, reafactoring test code
- chore : update build, package-manager
- rename : 파일 혹은 폴더명을 수정하거나 옮기는 수행할 경우
- remove : 파일을 삭제하는 작업만 수행할 경우

## 3. Subject
- 제목은 50자를 넘기지 않고, 대문자로 작성하고 마침표를 붙이지 않는다.
- 과거시제를 사용하지 않고 명령어로 작성한다.

## 4. Body
- 선택사항이기 때문에 모든 커밋에 본문내용을 작성할 필요는 없다.
- 부연설명이 필요하거나 커밋의 이유를 설명할 경우 작성해준다.
- 72자를 넘기지 않고 제목과 구분되기 위해 한칸을 띄워 작성한다.

## 5. footer
- 선택사항이기 때문에 모든 커밋에 꼬리말을 작성할 필요는 없다.
- issue tracker id를 작성할 때 사용한다.

# 6. Example
```
feat : Summarize changes in around 50 cracyers or less

More detailed explantory text, if neccssary. Wrap it to abount 70
chracters or so. In some contexts, the first line is treated as the
subject of the commit and rest of the text as the body.
The blank line separating the summary from the body is critical(unless you
omit the body entirely); variaus tools like 'log', 'shorting' and
'rebase' can get confused if you run the two together.

Explain the pronblem that this commit is solving. Focus on why you
are making this chang as opposed to how (the code explains that).
Are there side effects or other unintutive consequenses of this change?
Here's the place to explain them.

Furhere paragraphs come after blank lines.

 - Bullet points ar okay, too

 - Typically a hyphen or asterisk is used for the bullet, precdeded
 by a snigle space, with blank lines in between, but conventions vary here

If you use an issue tracker, put references to them at the bottom,
like this:

Resloves: #123
See also: #456, #789
``` 

```
my-dev-blog
├─ .babelrc
├─ .eslintrc.js
├─ .git
├─ .gitignore
├─ .npmrc
├─ .prettierrc
├─ .storybook
│  ├─ main.js
│  └─ preview.js
├─ .vscode
│  └─ settings.json
├─ README.md
├─ craco.config.js
├─ jest.config.js
├─ next-env.d.ts
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ next.svg
│  ├─ thirteen.svg
│  └─ vercel.svg
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  └─ hello
│  │  │     └─ route.ts
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.module.css
│  │  └─ page.tsx
│  ├─ assets
│  │  ├─ icons
│  │  │  ├─ BarsIcon.tsx
│  │  │  └─ SearchIcon.tsx
│  │  └─ styles
│  │     └─ index.css
│  ├─ components
│  │  ├─ atoms
│  │  │  └─ Button
│  │  │     ├─ Button.mdx
│  │  │     ├─ Button.scss
│  │  │     ├─ Button.stories.tsx
│  │  │     ├─ Button.test.tsx
│  │  │     ├─ Button.tsx
│  │  │     ├─ Button.types.ts
│  │  │     └─ index.ts
│  │  ├─ organisms
│  │  │  ├─ Footer.tsx
│  │  │  └─ Navigation.tsx
│  │  ├─ pages
│  │  │  └─ HomePage.tsx
│  │  └─ templates
│  │     └─ HomeTemplate.tsx
│  ├─ hooks
│  ├─ index.css
│  ├─ reducers
│  │  └─ modals.ts
│  ├─ routes
│  ├─ store
│  │  └─ index.ts
│  ├─ stories
│  │  ├─ Header.stories.tsx
│  │  ├─ Header.tsx
│  │  ├─ Introduction.stories.mdx
│  │  ├─ Page.stories.tsx
│  │  ├─ Page.tsx
│  │  ├─ assets
│  │  │  ├─ code-brackets.svg
│  │  │  ├─ colors.svg
│  │  │  ├─ comments.svg
│  │  │  ├─ direction.svg
│  │  │  ├─ flow.svg
│  │  │  ├─ plugin.svg
│  │  │  ├─ repo.svg
│  │  │  └─ stackalt.svg
│  │  ├─ header.css
│  │  └─ page.css
│  └─ types
│     ├─ icons
│     │  └─ IconSvgProp.ts
│     └─ mdx.d.ts
├─ tailwind.config.js
├─ tailwind.config.js_bak
└─ tsconfig.json

```