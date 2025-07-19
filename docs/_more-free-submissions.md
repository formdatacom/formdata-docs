---
sidebar_position: 13
---

# Get more free submissions

You can get up to 2000 free submissions every month, if you place a "**Powered by Form-Data**" badge on your form.
The badge is a small and non-intrusive link at the bottom of your form. It contains a link to Form-Data website. You can customize it to be dark or light.

:::info Note
Only submissions of forms that have the badge will consume your free quota. If you have more forms that do not have the badge, they will be consuming your regular quota.
:::
 
:::tip
Badges can be used on any form, and you get the free quota whether you are on the Free plan or on the Premium plan.
:::

![Form with badge](/img/form-with-badge.png)

:::caution Important
You will only be eligible for free submissions if you add the badge as described below, and if you keep it clearly visible. Badges that will be hidden, very small, very low contrast, etc will not be eligible for free submissions.
:::

In order to add a badge, follow these steps:

1. Add the following script to your site's `head` section:
   ```html
   <script src="https://static.form-data.com/js/form-data-tools.v1.min.js"></script>
   ```
   :::info Note 
   The script is hosted on a CDN and it's only 3K.
   :::
2. Add an empty div **inside** your `form` tag, and give it the class `form-data-powered-by`
   ```html
   <form>
     ...
     <div class="form-data-powered-by" data-formdata-lang="en" data-formdata-sitename="Super Store" data-formdata-theme="light"></div>
   </form>
   ```
3. **After** your closing `form` tag, add the following `script`:
   ```html
   <script>
     _fd.scan()
   </script>
   ```
   _`fd` is a global variable that is added by the first script. The `scan()` method searches the page for divs with the class `form-data-powered-by`, and turns them into the badge.

   :::info Note
   If you are using React, VueJs, or any other framework that dynamically creates your form, you should call `_fd.scan()` **after** your form has been rendered. For example, in VueJs, you can do that inside the `onMounted` hook of your form component.
   :::

As you can see in step 2 code sample above, there are some attributes that you can use to customize the badge. Let's review them

#### Language
Add `data-formdata-lang` attribute to your `div` in order to control the language of the badge.

If you don't specify any language, the default is English.

You can use any of the following values:
```text
Value   Language          Badge
ar      Arabic            يعمل بواسطة Form-Data
bg      Bulgarian         Powered by Form-Data
cs      Czech             Používáme Form-Data
da      Danish            Drevet af Form-Data
de      German            Powered by Form-Data
el      Greek             Βασισμένο στο Form-Data
en      English           Powered by Form-Data
es      Spanish           Soportado por Form-Data
fa      Persian           با نیروی Form-Data
fi      Finnish           Powered by Form-Data
fr      French            Propulsé par Form-Data
gl      Galician          Funciona con Form-Data
he      Hebrew            פועל על Form-Data
hr      Croatian          Pokreće Form-Data
hu      Hungarian         Meghajtja az Form-Data
id      Indonesian        Diberdayakan dengan Form-Data
is      Icelandic         Knúið af Form-Data
it      Italian           Powered by Form-Data
ja      Japanese          Powered by Form-Data
ko      Korean            Form-Data 제공
nb      Norwegian Bokmål  Drevet av Form-Data
nl      Dutch flemish     Mogelijk gemaakt door Form-Data
pl      Polish            Dostarczane przez Form-Data
pt      Portuguese        Desenvolvido por Form-Data
ro      Romanian          Propulsat de Form-Data
ru      Russian           Работает на Form-Data
sk      Slovak            Založené na Form-Data
sr      serbian           Покреће Form-Data
sv      Swedish           Drivs av Form-Data
th      Thai              ขับเคลื่อนโดย Form-Data
tr      Turkish           Powered by Form-Data
uk      Ukrainian         Працює на Form-Data
vi      Vietnamese        Cung cấp bởi Form-Data
zh_CN   chinese (China)   基于 Form-Data
zh_TW   chinese (Taiwan)  技術提供者 Form-Data
```
:::info Note
Right-to-left languages (Arabic, Persian and Hebrew) will appear properly if your site is correctly set as RTL.
:::

#### Theme
You can choose between light or dark theme, depending on your form's background.

If your form has a dark background, choose the **dark** theme.

If your form has a light background, choose the **light** theme. This is also the default theme.

To set the theme, add `data-formdata-theme` attribute to your div.

#### Site name
When someone clicks the badge, a new tab will be opened with a landing page that says "_domain.com is using Form-Data_" and some explanations.

By default, your domain name will appear in that text. If you wish that your brand name will appear instead of the domain name, you can add `data-formdata-sitename` attribute to your div and pass your brand name.
