let root = new Vue(
    {
        el:'#root',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
            
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        { 
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
            selectedChat: 0,
            lastMessages: '',
            chatField:'',
            searchChatField: '',
            // n: this.contacts[index].messages.length,
        },
        methods:{
            chatSelezionata : function(elementIndex){
                this.selectedChat = elementIndex;
                console.log(this.selectedChat);
                // this.lastMessages = this.contacts[this.selectedChat].messages.length;
            },
            addMessages: function(index){
                var d = new Date();
                let a = {
                    date: d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes + ':' + d.getSeconds(),
                    text: this.chatField,
                    status: 'sent'
                }
                console.log(a);
                this.contacts[index].messages.push(a);
                this.chatField = '';

                setTimeout(() => {
                    let b = {
                        date: d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes + ':' + d.getSeconds(),
                        text: 'ok bro!',
                        status: 'received'
                    };
                    this.contacts[index].messages.push(b);
                }, 1000);
                
            },
            searchChat: function(){

                this.contacts.forEach(element =>{

                    if(element.name.toLowerCase().includes(this.searchChatField.toLowerCase())){
                        element.visible = true;
                    }else{
                        element.visible = false;
                    }
                });
            },
        }
    }
);