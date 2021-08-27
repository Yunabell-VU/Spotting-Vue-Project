# Spotting

`Course` : Human-Computer-Interaction

`Group` : Robin - Group3

`Author` : Yu Chen



### Application

Spotting is a mobile application that aims to help the locals and tourists in Lobitos and Piedritas make quick and accurate reports when they spot rubbish and waste nearby and deliver this information to rubbish collectors who can use it to determine their working destinations. Users' positive behaviour (i.e. rubbish reporting and cleaning) shall be rewarded with points to redeem coupons for commodities or services and all of the users' activities are saved and classified for the users to track reporting and collecting histories.



#### Features

1. **Report**

   The Report is the core function of this app. Users shall be able to make their reports by uploading photos, location, text, or voice descriptions to describe the polluted area. Maps that are divided into grids are used to identify the location since it is difficult to describe the address by street names along the coastline. Users also need to weigh the scale of trash concentration level to give collectors sufficient information about the volume of rubbish they should expect. Taking into account the poor local network conditions, the SAVE function is added to allow users to save their inputs in local memory and upload the reports later.

   An easier way to make a report is designed for users who want to make quick reports and for those who are not familiar with mobile devices and apps. The user could make a voice report within 4 operations (click Report on the centre of navigation docker, choose Voice Input, press the big mic button to record a voice message and click upload).

2. **Reports Stream**

   On the home page, it shows the updated stream of all users' reports. Reporters may gain a sense of participation and a feeling of community through the streams. And collectors could find the nearest spot and select their goal to clean easily. To avoid different groups of collectors aiming at the same spot, a reservation function is added and reserved spots shall be removed from the stream.

   `(Figure: Home Page (left), History Page (right))`

   ![image-20210827133454443](http://yunabell-image-repository.oss-cn-shanghai.aliyuncs.com/img/image-20210827133454443.png)

   3. **History**

      History stores the collections of user activities. Four classified sections help users to check the related records directly. Users shall be able to read, edit and share their reports in each section. 

      - Processing: uploaded but waiting to be cleaned spots 
      - Reserved: spots the user reserved to clean up 
      - Cleaned: spots cleaned by the user or spots uploaded by the user but cleaned by others 
      - Saved: reports which are not uploaded.

   4. **Mall**

      Surfing kits discount, free surf lessons, bar drinks and maybe also recycling paper and cups, users can exchange their awarded points to redeem products and services with Lobitos and Piedritas characteristics. We try to attract more local children and teenagers and also tourists to use Spotting and contribute to the local environment by introducing this feature.

   5. **Multi-language**

      Users shall be able to switch between different languages namely English and Spanish from the header of the home page. The choice of languages is determined due to the demographic situation of residents and tourists.

   6. **Tutorial / Help / Instruction**

      Although most of the users from our user testing questionnaire replied that they found this app is easy to use and do not need extra help to master the app, we believe that this is mainly because our design conforms to the current popular Android app conventions (e.g. docker navigation) that have been accustomed to by the candidates we tested. Because feature phones were the widely used devices in the local area just a few years ago, we need to take into account that there can be a large number of users that are not familiar with mobile applications. Therefore, tutorials and help instructions are added to the home page and report page.

   

   #### Demo

   This following pics shows the implementation based on Vue.js.

   (The theme color is later on adjusted due hinge on the Color Test)

   ![image-20210827134545954](http://yunabell-image-repository.oss-cn-shanghai.aliyuncs.com/img/image-20210827134545954.png)

   

   ![image-20210827134601568](http://yunabell-image-repository.oss-cn-shanghai.aliyuncs.com/img/image-20210827134601568.png)

   

   ![image-20210827134616278](http://yunabell-image-repository.oss-cn-shanghai.aliyuncs.com/img/image-20210827134616278.png)

   

   ![image-20210827134650609](http://yunabell-image-repository.oss-cn-shanghai.aliyuncs.com/img/image-20210827134650609.png)

   #### Structure

   The following image illustrates the structure of all functions of the app and their interactions.

   ![img](http://yunabell-image-repository.oss-cn-shanghai.aliyuncs.com/img/60d517e607912920c80822a1.png)

   

### Reflective Summary

#### Group workflow

![image-20210827134014580](http://yunabell-image-repository.oss-cn-shanghai.aliyuncs.com/img/image-20210827134014580.png)

#### Assessment of Role

- organize all meetings 
-  set the deadlines 
-  assign each member’s tasks 
-  draw the prototypes 
-  design the questionnaire 
-  complete all the coding
-  prepared the materials needed for the demonstration




