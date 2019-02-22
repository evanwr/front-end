{% if collection.handle == 'clearance' and product.options.size == 1 %}
 <script>
   var product_variants_removed = [
     {%- for variant in product.variants -%}
       {%- unless variant.compare_at_price > 1 -%}
         '{{ variant.title }}',
       {%- endunless -%}
     {%- endfor -%}
   ];
 </script>
{% endif %}
