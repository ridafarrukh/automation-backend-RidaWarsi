

import * as clientpage from '../pages/createclient'
import * as billpage from '../pages/createbills'
import * as deleteclient from '../pages/deleteClient'
//import *as updateClient from '../pages/updateClient'
import * as logoutapplication from '../pages/logoutpage'
import * as createRoom from '../pages/createRoom'

describe('testing auth', function(){
   
  // Test case 1

    it('Create and Get all clients', function(){
        clientpage.createClientrequest(cy)
        clientpage.getallClients(cy)
        logoutapplication.logout(cy)
        
    })  
    
   
    //TEST case 2

    it('Create and delete client', function(){
        deleteclient.createAndDeleteClient(cy)
        logoutapplication.logout(cy)
        
    })
       
        
    //Test case 3

   it('Create and get all bills',function(){
       billpage.createBillRequest(cy)
       billpage.getallbills(cy)
       logoutapplication.logout(cy)
       
   })

    
    //Test case 4

    it('Create and delete bill',function(){
       billpage.createAndDeleteBill(cy)
       logoutapplication.logout(cy)
       
   })
   // Test case 5
   
   it('create room', function(){
       createRoom.createRoom(cy)
       createRoom.getallRooms(cy)
       logoutapplication.logout(cy)
       
   })

/*
    //Test case 6 update
    it('create and update client',function(){
     updateClient.createAndUpdateClient(cy)
    })
    */

})

        
   
    
