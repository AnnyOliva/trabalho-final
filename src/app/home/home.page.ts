export class HomePage (
  async processarTransferencia() {
)

let chaveValida = false;
formatos.forEach(formato => {
  if (this.chavePix && formato.test(this.chavePix))
    chaveValida = true; 
});

if (!chaveValida) {
  console.log('Chave PIX inválida!');
  await this.alertController.create({
    header: 'Atenção!',
    message: "A chave PIX informada é inválida.",
    buttons: ['OK']
  }).then(alert => alert.present());
} else if (!this.valor || this.valor <= 0) {


} 
})

export class HomePage implements OnInit {
  chavePix?: string;
  valor?: number;
  saldoAtual?: number;

  constructor(private alertController: AlertController, private toastController: TransformStreamDefaultController, accountService:AccountService) { }

  ngOnInit(): void {
    this.saldoAtual = this.accountService.getSaldo();
  }

}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   public chave:string="";
   public valor:number=0.0;
   public tipoChave:string="";

  constructor() {
    
  }

  public processPix(){
    let cpf_regex = RegExp("^\\d{3}\.\\d{3}\.\\d{3}-\\d{2}$","i")
    let telefone_regex = RegExp("^\\(\\d{2}\\) 9\\d{4}-\\d{4}$","i")
    
    if(this.chave.includes("@"))
      this.tipoChave="EMAIL"    
    else if(cpf_regex.test(this.chave))
      this.tipoChave="CPF"
    else if (telefone_regex.test(this.chave))  
      this.tipoChave = 'TEL'
    
    
  }
}

}
