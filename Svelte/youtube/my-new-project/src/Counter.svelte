<script>
    let count = 0

    //let doubled = count * 2 olmaz onun yerine aşağıdaki gibi yapmalıyız

    $:doubled = count * 2


    const clickHandle = () => {
        count += 1;
    }
</script>


<button on:click={clickHandle}>
    Bu butona {count} kez tıkladınız
</button>

<p>
    Bu sayı {count * 2} değerindedir.
</p>

{#if doubled === 0}
    <p>
        Count x 2 nin değeri 0'dır.
    </p>
{:else if doubled % 4 === 0}
    <p style="background-color: lime">
        Count x 2 = {doubled} ve 4 e bölünür.
    </p>
{:else}
    <p style="background-color: orangered">
        Count x 2 = {doubled} ve 4 e bölünmez.
    </p>
{/if}
