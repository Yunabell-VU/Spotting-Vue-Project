import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home'
import My from '../views/my/My'
import Mall from '../views/mall/Mall'
import History from '../views/history/History'
import Report from '../views/report/Report'

const routes = [
  {
    path: '/',
    name: 'HOME',
    component: Home
  }, {
    path: '/reports/samplefull',
    name: 'ReportSampleFull',
    component: () => import('../views/home/reportsample/SampleFull.vue')
  }, {
    path: '/my',
    name: 'MY',
    component: My
  }, {
    path: '/mall',
    name: 'MALL',
    component: Mall
  }, {
    path: '/history',
    name: 'HISTORY',
    component: History
  }, {
    path: '/report',
    name: 'REPORT',
    component: Report
  }, {
    path: '/report/full',
    name: 'ReportFull',
    component: () => import('../views/fullreport/FullReport.vue')
  }, {
    path: '/report/voicel',
    name: 'ReportVoice',
    component: () => import('../views/voicereport/VoiceReport.vue')
  }, {
    path: '/my/wallet',
    name: 'Wallet',
    component: () => import('../views/wallet/Wallet.vue')
  }, {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/my/contact/Contact')
  }, {
    path: '/about',
    name: 'AboutUs',
    component: () => import('../views/my/about/AboutUs')
  }, {
    path: '/report/uploaded/sample1',
    name: 'UploadFullRep',
    component: () => import('../views/upload/uploadreport/UploadFullRep')
  }, {
    path: '/report/saved/sample1',
    name: 'SavedRep',
    component: () => import('../views/upload/savereport/SavedRep')
  }, {
    path: '/map',
    name: 'Map',
    component: () => import('../components/Map.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
