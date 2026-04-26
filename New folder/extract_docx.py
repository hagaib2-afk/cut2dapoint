import zipfile
import xml.etree.ElementTree as ET

path = r'C:\Users\Admin\Downloads\Cut2DPoint_Website_Handover_v2.docx'

try:
    with zipfile.ZipFile(path, 'r') as zip_ref:
        doc_content = zip_ref.read('word/document.xml').decode('utf-8')

        root = ET.fromstring(doc_content)
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

        # Extract all text
        text_elements = root.findall('.//w:t', ns)
        full_text = ''.join([elem.text if elem.text else '' for elem in text_elements])

        print(full_text)
except Exception as e:
    print(f"Error: {e}")
    import traceback
    traceback.print_exc()
