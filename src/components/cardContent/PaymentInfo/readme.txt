PAYMENT INFO Componente

Componente para mostrar la información bancaria para pagos con transferencia.

Muesta el logo del banco como botón y despliega un modal con el nombre del banco, la información d ela cuenta con un
botón para copiar la información al portapapeles y un botón para cerrar el modal.

Uso del Componente

{/* Componente de información de pago */}

          <Row>
            <Col className={styles.paymentSection}>
              <section id="payment" className={styles.paymentInfo}>
                <div>
                  <h2 className={styles.paymentTitle}>Información de Pago</h2>
                  <p className={styles.paymentDescription}>
                    Haz clic en el logo para acceder a los datos de la cuenta
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.bankInfo}>
                    <PaymentInfo
                      bankName="Banco Pichincha"
                      accountNumber="2204744098"
                      accountType="Cuenta de Ahorros"
                      identification="1726213612"
                      email="eriveinti@gmail.com"
                      bankLogo="/images/bancoPichincha_b.png"
                    />
                    <PaymentInfo
                      bankName="Banco Guayaquil"
                      accountNumber="0013840275"
                      accountType="Cuenta de Ahorros"
                      identification="1726213612"
                      email="eriveinti@gmail.com"
                      bankLogo="/images/bancoGuayaquil_b.png"
                    />
                    <PaymentInfo
                      bankName="Banco Produbanco"
                      accountNumber="18000872592"
                      accountType="Cuenta de Ahorros"
                      identification="1726213612"
                      email="eriveinti@gmail.com"
                      bankLogo="/images/produbanco_b.png"
                    />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>


scss

//---------------------------------
//Payment section
//---------------------------------

.paymentSection{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: $spacing-4;
  width: 100%;
  height: auto;
  background-color: $primary-color;

}

.paymentInfo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: $spacing-4;
  width: 100%;
  height: auto;

  .paymentTitle {
    font-family: $font-primary;
    font-size: 1.8rem;
    color: $accent-color;
    text-align: center;
    margin-bottom: $spacing-4;
  }

  .paymentDescription{
    font-family: $font-primary;
    font-size: 1rem;
    color: $accent-color;
    text-align: center;
    margin-bottom: $spacing-4;
  
  }

  .bankInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: $spacing-8;
    width: 100%;
    height: auto;

    border-radius: 50%;
  }
}